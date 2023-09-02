function createSummaryItemEle() {}

const summaryListEle = document.querySelector('.summary__list');

// console.log(data);
fetch('../../data.json')
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        json.forEach((data) => {
            const { category, icon, score } = data;

            summaryListEle.innerHTML += `
            <div class="summary__item">
                <div class="summary__name">
                    <span class="icon">
                        <img src="${icon}" />
                    </span>
                    <span class="name">${category}</span>
                </div>
                <div class="summary__score">
                    <span class="score">${score} &nbsp;</span>
                    <div class="total"> / 100</div>
                </div>
            </div>
            `;
        });
    });
