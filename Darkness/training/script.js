const progress = document.querySelector("progress");
function recalculateProgress() {
  // Высота экрана:
  const viewportHeight = window.innerHeight;
  // Высота страницы:
  const pageHeight = document.body.offsetHeight;
  // Текущее положение прокрутки:
  const currentPosition = window.scrollY;

  // Из высоты страницы вычтем высоту экрана,
  // чтобы при прокручивании до самого низа
  // прогресс-бар заполнялся до конца.
  const availableHeight = pageHeight - viewportHeight;

  // Считаем процент «прочитанного» текста:
  const percent = (currentPosition / availableHeight) * 100;

  // Проставляем посчитанное значение
  // в качестве значения для value прогресс-бара:
  progress.value = percent;
  console.log(Math.round(percent));
}
window.addEventListener("scroll", recalculateProgress);
window.addEventListener("resize", recalculateProgress);
