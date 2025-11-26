let tg = window.Telegram.WebApp;

tg.expand();

// Настройка MainButton
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.setText("📖 Получить описание фильма");
tg.MainButton.hide();

let selectedItem = "";

// Обработчики для кнопок фильмов
document.querySelectorAll('.movie-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Снимаем выделение со всех кнопок
        document.querySelectorAll('.movie-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Выделяем текущую кнопку
        this.classList.add('selected');
        selectedItem = this.getAttribute('data-item');
        
        // Показываем MainButton
        tg.MainButton.show();
    });
});

// Обработчик нажатия на MainButton
tg.MainButton.onClick(function() {
    if (selectedItem) {
        tg.sendData(selectedItem);
    }
});