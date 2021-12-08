import jwt from 'jsonwebtoken';

const validarToken = (token) => {
  if (token) {
    const verificacion = jwt.verify(token, 'secret', (err, data) => {
      if (data) {
        return {
          data: data,
        };
      }
      if (err) {
        return {
          error: err,
        };
      }
    });
    console.log(verificacion, token);
    return verificacion;
  }
};

const generarToken = (payload) => {
  return jwt.sign(payload, 'secret', {
    expiresIn: '24h',
  });
};

export { generarToken, validarToken };