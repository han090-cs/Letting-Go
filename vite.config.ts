import {defineConfig} from 'vitest/config';
import {createHash} from 'node:crypto';
import {readdirSync,readFileSync,statSync,writeFileSync} from 'node:fs';
import {join,relative} from 'node:path';
import type {Plugin} from 'vite';

/** After the build: stamp sw.js with a content hash and the full list of files to pre-cache,
 *  so the whole app works offline after the very first visit and updates itself when it changes. */
function offlineManifest():Plugin{
  let outDir='dist';
  const walk=(d:string):string[]=>readdirSync(d).flatMap(f=>{const p=join(d,f);return statSync(p).isDirectory()?walk(p):[p]});
  return{
    name:'offline-manifest',apply:'build',
    configResolved(c){outDir=c.build.outDir},
    closeBundle(){
      const files=walk(outDir).map(p=>relative(outDir,p).split('\\').join('/')).filter(f=>f!=='sw.js').sort();
      const hash=createHash('sha256');for(const f of files)hash.update(f).update(readFileSync(join(outDir,f)));
      const version=hash.digest('hex').slice(0,10);
      const sw=readFileSync('src/sw.template.js','utf8')
        .replaceAll('__VERSION__',version).replaceAll('__ASSETS__',JSON.stringify(['./',...files]));
      writeFileSync(join(outDir,'sw.js'),sw);
      writeFileSync(join(outDir,'version.txt'),version+'\n');
    }
  };
}

export default defineConfig({
  base:'./',
  define:{__APP_VERSION__:JSON.stringify(process.env.npm_package_version||'0.0.0')},
  build:{
    target:['es2020','safari14','chrome87','firefox78'],
    assetsDir:'assets',
    cssCodeSplit:false,
    sourcemap:false,
    assetsInlineLimit:0
  },
  plugins:[offlineManifest()],
  test:{environment:'node',include:['src/**/*.test.ts']}
});
