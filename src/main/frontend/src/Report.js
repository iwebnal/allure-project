import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './styles/report.css';
import arrow from './images/arrow-left-solid.svg';

function Report(props) {

    const navigate = useNavigate();

    const navigateToReportsPage = () => {
        navigate('/reportsPage');
    };
   
    return (
        <div class="container-wrapper">
            <div class="row tabs-box">
                <div class="d-flex align-items-start">
                    <div class="nav flex-column nav-pills me-3 tabs-menu" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div class="buttons-wrapper">
                            <div class="nav-buttons">
                                <button class="nav-link active" id="v-pills-overview-tab" data-bs-toggle="pill" data-bs-target="#v-pills-overview" type="button" role="tab" aria-controls="v-pills-overview" aria-selected="true">Overview</button>
                                <button class="nav-link" id="v-pills-categories-tab" data-bs-toggle="pill" data-bs-target="#v-pills-categories" type="button" role="tab" aria-controls="v-pills-categories" aria-selected="false">Categories</button>
                                <button class="nav-link" id="v-pills-suites-tab" data-bs-toggle="pill" data-bs-target="#v-pills-suites" type="button" role="tab" aria-controls="v-pills-suites" aria-selected="false">Suites</button>
                                <button class="nav-link" id="v-pills-graphs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-graphs" type="button" role="tab" aria-controls="v-pills-graphs" aria-selected="false">Graphs</button>
                                <button class="nav-link" id="v-pills-timeline-tab" data-bs-toggle="pill" data-bs-target="#v-pills-timeline" type="button" role="tab" aria-controls="v-pills-timeline" aria-selected="false">Timeline</button>
                                <button class="nav-link" id="v-pills-behaviors-tab" data-bs-toggle="pill" data-bs-target="#v-pills-behaviors" type="button" role="tab" aria-controls="v-pills-behaviors" aria-selected="false">Behaviors</button>
                                <button class="nav-link" id="v-pills-packages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-packages" type="button" role="tab" aria-controls="v-pills-packages" aria-selected="false">Packages</button>
                            </div>
                            <div class="button-link">
                                <button class="nav-link" type="button" onClick={navigateToReportsPage}>
                                    <img class="arrow-reports" src={arrow} alt="arrow" />
                                    Reports
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content content-wrapp" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-overview" role="tabpanel" aria-labelledby="v-pills-overview-tab" tabindex="0">
                            111 Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке,
                            а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.
                            Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
                            По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст.
                            В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                        </div>
                        <div class="tab-pane fade" id="v-pills-categories" role="tabpanel" aria-labelledby="v-pills-categories-tab" tabindex="0">
                            222 Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке,
                            а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.
                            Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
                            По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст.
                            В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                        </div>
                        <div class="tab-pane fade" id="v-pills-suites" role="tabpanel" aria-labelledby="v-pills-suites-tab" tabindex="0">
                            333 Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке,
                            а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.
                            Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
                            По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст.
                            В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                        </div>
                        <div class="tab-pane fade" id="v-pills-graphs" role="tabpanel" aria-labelledby="v-pills-graphs-tab" tabindex="0">
                            444 Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке,
                            а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.
                            Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
                            По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст.
                            В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                        </div>
                        <div class="tab-pane fade" id="v-pills-timeline" role="tabpanel" aria-labelledby="v-pills-timeline-tab" tabindex="0">
                            555 Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке,
                            а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.
                            Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
                            По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст.
                            В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                        </div>
                        <div class="tab-pane fade" id="v-pills-behaviors" role="tabpanel" aria-labelledby="v-pills-behaviors-tab" tabindex="0">
                            667 Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке,
                            а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.
                            Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
                            По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст.
                            В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                        </div>
                        <div class="tab-pane fade" id="v-pills-packages" role="tabpanel" aria-labelledby="v-pills-packages-tab" tabindex="0">
                            777 Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке,
                            а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей.
                            Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
                            По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст.
                            В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Report;