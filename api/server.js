const dataBase = {
  organizations: [
    {
      name: "Фонд 'Сколково'",
      inn: "7706412961",
      director: "Балега Юрий Юрьевич",
      address: "обл.Московская, г.Одинцово, д.Сколково, ул.Новая, 100",
      rating: 1,
    },
    {
      name: "АНО 'Издательство РАМН'",
      inn: "7709202761",
      director: "Султыгов Марат Магомедович",
      address: "г.Москва, переулок Яковоапостольский, д.11-13, стр.1, пом.1",
      rating: 1,
    },
    {
      name: "Российское историческое общество",
      inn: "7704280029",
      director: "Иванов Петр Иванович",
      address: "г.Москва, ул.Воронцово поле, д.13, стр.1",
      rating: 1,
    },
    {
      name: "Академический учебно-научный центр",
      inn: "7704274804",
      director: "Иванов Иван Николаевич",
      address: "г.Москва, переулок Борисоглебский, д.13, 3",
      rating: 1,
    },
    {
      name: "ЦИПБ РАН",
      inn: "7728514244",
      director: "Петров Иван Федорович",
      address: "г.Москва, ул.Гарибальди, д.21Б",
      rating: 1,
    },
    {
      name: "ООО 'Прибор-ресурс'",
      inn: "7743226441",
      director: "Кудряшов Борис Андреевич",
      address: "г.Москва, просп.Ленинградский, д.77, кор.1, под пом VIII К 7",
      rating: 2,
    },
    {
      name: "ООО 'Прибор-ресурс'",
      inn: "7743226441",
      director: "Сергеев Александр Михайлович",
      address: "г.Москва, просп.Ленинградский, д.77, кор.1, под пом VIII К 7",
      rating: 2,
    },
    {
      name: "ООО 'Прибор-ресурс'",
      inn: "7743226441",
      director: "Балега Юрий Юрьевич",
      address: "г.Москва, просп.Ленинградский, д.77, кор.1, под пом VIII К 7",
      rating: 2,
    },
    {
      name: "Фонд 'Сколково'",
      inn: "7706412961",
      director: "Султыгов Марат Магомедович",
      address: "обл.Московская, г.Одинцово, д.Сколково, ул.Новая, 100",
      rating: 2,
    },
    {
      name: "АНО 'Издательство РАМН'",
      inn: "7709202761",
      director: "Иванов Петр Иванович",
      address: "г.Москва, переулок Яковоапостольский, д.11-13, стр.1, пом.1",
      rating: 2,
    },
    {
      name: "Российское историческое общество",
      inn: "7704280029",
      director: "Иванов Иван Николаевич",
      address: "г.Москва, ул.Воронцово поле, д.13, стр.1",
      rating: 3,
    },
    {
      name: "Академический учебно-научный центр",
      inn: "7704274804",
      director: "Балега Юрий Юрьевич",
      address: "г.Москва, переулок Борисоглебский, д.13, 3",
      rating: 3,
    },
    {
      name: "ЦИПБ РАН",
      inn: "7728514244",
      director: "Петров Иван Федорович",
      address: "г.Москва, ул.Гарибальди, д.21Б",
      rating: 3,
    },
    {
      name: "ООО 'Прибор-ресурс'",
      inn: "7743226441",
      director: "Кудряшов Борис Андреевич",
      address: "г.Москва, просп.Ленинградский, д.77, кор.1, под пом VIII К 7",
      rating: 3,
    },
  ],
  employees: [
    {
      id: 1,
      name: "Иванов Иван Иванович",
      profession: "Заместитель",
    },
    {
      id: 2,
      name: "Константинов Иван Иванович",
      profession: "Секретарь",
    },
  ],
  report: [
    {
      2020: "123 000 000 ₽",
      2019: "90 568 666 ₽",
      2018: "200 568 666 ₽",
    },
    {
      2020: "123 587 569 ₽",
      2019: "123 587 569 ₽",
      2018: "123 587 569 ₽",
    },
    {
      2020: "258 654 588 ₽",
      2019: "258 654 588 ₽",
      2018: "258 654 588 ₽",
    },
  ],
  statistics: [
    {
      id: 1,
      name: "Урожай 2020",
      weight: 15150000,
      unit: "тонн",
      area: "120 областей",
    },
    {
      id: 2,
      name: "Урожай 2019",
      weight: 102650980,
      unit: "тонн",
      area: "250 областей",
    },
  ],
  technic: [
    {
      id: 1,
      name: "Экскаваторы 2020",
      machine: "15 100 машин",
      area: "130 областей",
      company: "5 предприятий",
    },
  ],
  structure: [
    {
      id: 1,
      name: "ФГБУН Институт нанотехнологий микроэлектроники РАН",
      description: "Идет процесс ликвидации с 25.10.2019 по 10.10.2020",
      director: "Сауров Александр Николаевич",
      contract: "Трудовой контракт с 25.03.2017 по 25.03.2023",
      address: "119991, Москва, Ленинский просп., 32а",
      staff: "123 сотрудника",
      previous: "",
    },
    {
      id: 2,
      name: "ФГБУН Институт нанотехнологий микроэлектроники РАН",
      description: "Находится в реорганизации с 23.09.2018 по 23.09.2020",
      director: "Сауров Александр Николаевич",
      contract: "Трудовой контракт с 25.03.2017 по 25.03.2023",
      address: "119991, Москва, Ленинский просп., 32а",
      staff: "123 сотрудника",
      previous: [
        "ФГБУН науки Объединенный институт высоких температур РАН",
        "ФГБУН Институт проблем управления сложными системами РАН",
      ],
    },
    {
      id: 3,
      name: "ФГБУН Институт нанотехнологий микроэлектроники РАН",
      description: "Идет процесс банкротства с 23.09.2018 по 23.09.2020",
      director: "Сауров Александр Николаевич",
      contract: "Трудовой контракт с 25.03.2017 по 25.03.2023",
      address: "119991, Москва, Ленинский просп., 32а",
      staff: "123 сотрудника",
      previous: "",
    },
  ],
};

const api = {
  get(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataBase[data]);
      }, 200);
    });
  },
};
export default api;
