const tf = require('@tensorflow/tfjs-node')
const fs = require('fs')


const readImage = path => {
    const imageBuffer = fs.readFileSync(path);
    const tfimage = tf.node.decodeImage(imageBuffer);
    console.log(tfimage)
    return tfimage;
}

const run = async () => {
    const model = await tf.loadLayersModel('https://127.0.0.1:8080/model/model.json');
    //console.log(await tf.loadLayersModel('https://raw.githubusercontent.com/infinitered/nsfwjs-mobile/master/nsfw-model.json'))
   // const imageTensorTest = readImage('/home/franciscoossian/repos/teste_ml/data/t.png')
  //  const predict = await model.predict(imageTensorTest)
  //  const data = predict.data()
  //  console.log(data)
}

run()