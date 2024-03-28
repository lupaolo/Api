const express = require('express');
const app = express();

app.get('/exercicio9/:horastrabalhadas/:dependentes/:horasextras', (req, res) => {
    const horastrab = Number(req.params.horastrabalhadas);
    const depende = Number(req.params.dependentes);
    const extras = Number(req.params.horasextras);

    let salarioliquido;

    const calc = 282.4 * horastrab + (32 * depende) + (423.6 * extras);

    if (calc >= 2000 && calc < 5001) {
        salarioliquido = calc - (calc * 0.1);
    } else if (calc > 5000) {
        salarioliquido = calc - (calc * 0.2);
    }

    let salario_recebe;
    if (salarioliquido < 3501) {
        salario_recebe = salarioliquido + 1000;
    } else if (salarioliquido > 3500) {
        salario_recebe = salarioliquido + 500;
    }

    res.send('O seu salário é ' + salario_recebe);
});

app.listen(3000, () => {
    console.log('aplicação iniciada em http://localhost:3000');
});
