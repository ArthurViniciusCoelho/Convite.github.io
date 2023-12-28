document.addEventListener('DOMContentLoaded', function () {
    // Atualizar a data no carregamento da página
    updateDate();
});

function updateDate() {
    // Obter a data atual
    const now = new Date();

    // Formatar a data como "dd/mm/yyyy"
    const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;

    // Atualizar o elemento HTML com a data formatada
    document.getElementById('date').innerText = formattedDate;
}

function confirmAttendance() {
    alert('Obrigado por confirmar presença! Aguardamos ansiosamente pela sua participação na festa de aniversário.');
}
