import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'
const INPUT_path_to_your_images = 'backup/images'
const OUTPUT_path = 'public/images'

async function buscarImagenes(carpeta) {
  let imagenes = []
  let archivos = await fs.readdir(carpeta)
  for (let archivo of archivos) {
    let ruta = path.join(carpeta, archivo)
    let stats = await fs.stat(ruta)
    if (stats.isDirectory()) {
      let subimagenes = await buscarImagenes(ruta)
      imagenes.push(...subimagenes)
    } else {
      imagenes.push(ruta)
      sharp(ruta)
        .webp()
        .jpeg({ quality: 80, alphaQuality: 80 })
        .toFile(`${OUTPUT_path}/${archivo.split('.')[0]}.webp`, (err, info) => {
          if (err) {
            console.log('\x1b[31m%s\x1b[0m', err)
            return
          }
          if (info) {
            console.log('\x1b[42m%s\x1b[0m', `${OUTPUT_path}/${archivo.split('.')[0]}.webp creada`)
          }
        })
    }
  }
  return imagenes
}

buscarImagenes('./backup/images')
