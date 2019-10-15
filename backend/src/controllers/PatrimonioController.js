const firebase = require('firebase-admin');

async function initFirebase() {
  firebase.initializeApp({
    credential: firebase.credential.applicationDefault(),
  });

  return firebase;
}

async function connectBd() {
  const connection = await initFirebase();
  const db = connection.firestore();

  return db;
}

async function save(req, res) {
  //console.log(req.params);

  const { tipo } = req.params;
  const {
    titulo,
    historiaTitulo,
    historiaTexto,
    curTitulo,
    curTexto,
    localizacao,
  } = req.body;

  const patrimonio =
    tipo === 'igreja-da-se' ||
    tipo === 'casa-das-onze-janelas' ||
    tipo === 'igreja-de-santo-alexandre';

  if (patrimonio) {
    const connection = await connectBd();
    const docRef = await connection.collection('patrimonio').doc(tipo);
    const setAda = await docRef.set({
      titulo: titulo,
      historia: {
        titulo: historiaTitulo,
        texto: historiaTexto,
        //imgRef: imgRef
      },
      curiosidade: {
        titulo: curTitulo,
        texto: curTexto
      },
      localizacao: localizacao
    });
    return res.json({ ok: true });  
  }

  return res.json({ error: 'Parâmetro inválido' });
}

async function update() {}

async function getPatrimonio(patrimonio) {
  const connection = connectBd();
  const patRef = connection.collection('patrimonio').doc(patrimonio);

  const getDoc = patRef
    .get()
    .then((doc) => {
      if (!doc.exists) {
        console.log('Nenhum documento encontrado!');
      } else {
        console.log('Dados do documento:', doc.data());
      }
    })
    .catch((err) => {
      console.log('Error getting document', err);
    });
}

module.exports = {
  initFirebase,
  connectBd,
  save,
  update,
  getPatrimonio,
};
