const profissionais = [
    {nome:"Ana Silva", profissao:"Front-End", experiencia:"3 anos", habilidades:["HTML","CSS","JS"], sobre:"Especialista em interfaces responsivas."},
    {nome:"Carlos Almeida", profissao:"Analista de Dados", experiencia:"5 anos", habilidades:["Python","SQL","Power BI"], sobre:"Transforma dados em decisões práticas."},
    {nome:"Mariana Torres", profissao:"UX Designer", experiencia:"4 anos", habilidades:["Figma","Prototipação","Pesquisa"], sobre:"Cria experiências intuitivas."},
    {nome:"Lucas Pereira", profissao:"Dev Back-End", experiencia:"6 anos", habilidades:["Node.js","MongoDB","API"], sobre:"Especialista em servidores e banco de dados."},
    {nome:"Beatriz Costa", profissao:"Engenheira de Software", experiencia:"7 anos", habilidades:["Java","Spring","Git"], sobre:"Foca em sistemas robustos."},
    {nome:"Rafael Santos", profissao:"Cientista de Dados", experiencia:"4 anos", habilidades:["Python","R","Machine Learning"], sobre:"Analisa grandes volumes de dados."},
    {nome:"Fernanda Lima", profissao:"Product Manager", experiencia:"5 anos", habilidades:["Gestão","Scrum","Roadmap"], sobre:"Gerencia produtos e equipes."},
    {nome:"Gabriel Rocha", profissao:"Dev Mobile", experiencia:"3 anos", habilidades:["React Native","Flutter","UI"], sobre:"Cria apps móveis modernos."},
    {nome:"Juliana Dias", profissao:"Designer Gráfico", experiencia:"6 anos", habilidades:["Photoshop","Illustrator","Branding"], sobre:"Cria identidades visuais impactantes."},
    {nome:"Thiago Martins", profissao:"Especialista em TI", experiencia:"8 anos", habilidades:["Redes","Segurança","Linux"], sobre:"Garante infraestrutura segura."}
];

let profissionalAtual = null;

function verDetalhes(i){
    profissionalAtual = profissionais[i];
    const detalheBox = document.getElementById("detalheBox");

    document.getElementById("detalheNome").innerText = profissionalAtual.nome;
    document.getElementById("detalheProf").innerText = profissionalAtual.profissao;
    document.getElementById("detalheExp").innerText = profissionalAtual.experiencia;
    document.getElementById("detalheHab").innerText = profissionalAtual.habilidades.join(", ");
    document.getElementById("detalheSobre").innerText = profissionalAtual.sobre;

    // Fade-in
    detalheBox.style.opacity = 0;
    detalheBox.style.display = "block";
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if(opacity >= 1){
            clearInterval(fadeIn);
        } else {
            opacity += 0.05;
            detalheBox.style.opacity = opacity;
        }
    }, 20);

    // Scroll suave
    detalheBox.scrollIntoView({behavior:"smooth"});
}

function recomendarProf() {
    if(profissionalAtual){
        alert(`Você recomendou ${profissionalAtual.nome}!`);
    }
}

function mandarMensagem() {
    if(profissionalAtual){
        alert(`Mensagem enviada para ${profissionalAtual.nome}!`);
    }
}
