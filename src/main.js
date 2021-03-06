import SiteMenuView from "./view/site-menu.js";
import FilterPresenter from "./presenter/filter.js";
import {generateTask} from "./mock/task.js";
import {render, RenderPosition} from "./utils/render.js";
import TasksModel from "./model/tasks.js";
import FilterModel from "./model/filter.js";
import BoardPresenter from "./presenter/board.js";

const TASK_AMOUNT = 21;

const tasks = new Array(TASK_AMOUNT).fill().map(generateTask);

const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterModel = new FilterModel();

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, new SiteMenuView(), RenderPosition.BEFOREEND);

const boardPresenter = new BoardPresenter(siteMainElement, tasksModel, filterModel);
const filterPresenter = new FilterPresenter(siteMainElement, filterModel, tasksModel);

filterPresenter.init();
boardPresenter.init();

document.querySelector(`#control__new-task`).addEventListener(`click`, (evt) => {
  evt.preventDefault();
  boardPresenter.createTask();
});
