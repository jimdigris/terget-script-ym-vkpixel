/* срабатываение целей (для VK Pixel или метрики */
(function () {
  let targets = [                                    // классы элементов на которые вешаем цели
    'vkp_placeOrder',                                // кн Оформить заказ в корзине
    'vkp_preOrder',                                  // кн Предзаказ
  ];

  targets.forEach((target) => {
    let elements = document.querySelectorAll(`.${target}`);

    if (elements.length > 0) {
      elements.forEach((element) => {
        // по клику на элемент вешаем цель - срабатывание скрипта (передаваемый параметр = имени класса)
        element.addEventListener('click', () => { _tmr.push({ type: 'reachGoal', id: 3300894, goal: target }); });
      });
    }

  });
})();
