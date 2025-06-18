const login = document.getElementById('admin-login');
const acesso = document.getElementById('admin-content');
const ButtonAdmin = document.getElementById('admin-login-btn');
//Abas de navegação


ButtonAdmin.addEventListener('click', function() {
    login.classList.add('hidden')
    acesso.classList.remove('hidden')
})

//Animação do menu
// Seleciona todos os botões de aba e os conteúdos das abas
const tabs = document.querySelectorAll('.admin-tab');
const contents = document.querySelectorAll('.admin-tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');
    const targetPanel = document.getElementById(`${target}-tab`);

    // Remove a classe active de todos os botões
    tabs.forEach(t => {
      t.classList.remove('active');
      t.classList.remove('text-blue-600');
      t.classList.remove('border-blue-600');
      t.classList.add('text-gray-600');
    });

    // Remove a classe active de todos os painéis
    contents.forEach(c => c.classList.remove('active'));

    // Ativa o botão clicado
    tab.classList.add('active');
    tab.classList.remove('text-gray-600');
    tab.classList.add('text-blue-600');
    tab.classList.add('border-blue-600');

    // Mostra o painel correspondente
    targetPanel.classList.add('active');
  });
});

//script para adicionar imagem
const imageInput = document.getElementById('prize-image-input');
const preview = document.getElementById('preview-image');
const cameraIcon = document.getElementById('camera-icon');

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.classList.remove('hidden');
      cameraIcon.classList.add('hidden');
    }
    reader.readAsDataURL(file);
  }
});

