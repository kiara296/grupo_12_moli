

const verifyPasswords = (req, res, next) => {
    const pssw = req.body.password;
    const psswConfirm = req.body.pass_confirm;

    if(pssw == psswConfirm) {
        next();
    } else {
        let errors = null;
        let userLogged = null;
        res.render('regmoli', { errors, data: req.body, message: '* Las contraseñas deben ser iguales', userLogged });
    }
}

module.exports = verifyPasswords;