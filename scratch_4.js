function welcomeToSchool (name, years) {
    const MIN_YEARS = 18;
    const TEACHER_NAME = 'А. С. Иванов';
    const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';

    while (!name) {
        alert('Вы не указали имя!');
        name = prompt('Как вас зовут?');
    }

    while (!years) {
        alert('Вы не указали возраст!');
        years = Math.round(prompt('Укажите ваш возраст'));
    }

    if (years < MIN_YEARS) {
        alert(`Вам запрещено водить авто, вам должно быть ${MIN_YEARS} лет или больше`);
    } else {
        alert(`Добро пожаловать в автошколу, ${name}\n
        Ваш преподаватель: ${TEACHER_NAME}\n
        Ждём вас по адресу: ${SCHOOL_ADDRESS}`);
    }
}

// Test run:
// welcomeToSchool('Александр');
// welcomeToSchool('', 15);
// welcomeToSchool();
// welcomeToSchool('Александр', 18);