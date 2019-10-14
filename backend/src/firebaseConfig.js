const firebase = require("firebase-admin");

function initFirebase() {
  firebase.initializeApp({
    credential: firebase.credential.applicationDefault()
  });

  return firebase;
}

function connectBd() {
  const connection = initFirebase();
  const db = connection.firestore();

  return db;
}

function saveContentDocument(patrimonio, titulo, texto) {
  const connection = connectBd();
  const docRef = connection.collection('patrimonio').doc(patrimonio);

  // const setAda = docRef.set({
  //   titulo: titulo,
  //   historia: {
  //     titulo: historiaTitulo,
  //     texto: historiaTexto,
  //     imgRef: imgRef
  //   },
  //   curiosidade: {
  //     titulo: curTitulo,
  //     texto: curTexto
  //   },
  //   localizacao: localizacao
  // });
}

function updateContentDocument() {}

function getContentDocument(patrimonio) {
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
  saveContentDocument,
};
