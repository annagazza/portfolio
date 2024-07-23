import {WORKS} from './works-data.js?v1.0';

export const TAGS_MAP = new Map([
    ['Data visualization', '✷'],
    ['UX/UI design', '✦'],
    ['Visual design', '✱'],
    ['Editorial', '✹'],
]);

let activeFilters = [];
let isGridScrollable = false;

const wrapWithLink = (work, elements) => {
    const link = document.createElement('a');
    link.href = work.href;

    for (const element of elements) {
        link.appendChild(element);
    }

    return link;
}

const renderTitle = (work) => {
    const title = document.createElement('div');
    title.className = 'title';

    const titleP = document.createElement('h3');
    titleP.textContent = work.name;
    titleP.className = 'title-p';
    title.appendChild(titleP);

    const titleContent = document.createElement('p');
    titleContent.className = 'media';
    const tagsText = work.tags.map(tag => TAGS_MAP.get(tag)).join(' ');
    titleContent.textContent = `${tagsText} ${work.media}`;
    title.appendChild(titleContent);

    return title;

}

const renderVideo = (work) => {
    const videoContainer = document.createElement('div');
    videoContainer.className = 'imghover';

    const video = document.createElement('video');
    video.className = 'imgprogetto';
    video.playsinline = true;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;

    const videoSrc = document.createElement('source');
    videoSrc.src = work.video;
    videoSrc.type = 'video/mp4';
    video.appendChild(videoSrc);

    videoContainer.appendChild(video);

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    videoContainer.appendChild(overlay);

    return videoContainer;
}

const renderImage = (work) => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'imghover';

    const img = document.createElement('img');
    img.src = work.img;
    img.alt = work.name;
    img.className = 'imgprogetto';

    imgContainer.appendChild(img);

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    imgContainer.appendChild(overlay);

    return imgContainer;
}

const renderImageOrVideo = (work) => {
    return work.video ? renderVideo(work) : renderImage(work);
}

const renderDescription = (work) => {
    const description = document.createElement('div');
    description.className = 'description';

    const skill = document.createElement('div');
    skill.textContent = work.skill;
    skill.className = 'skill';
    description.appendChild(skill);

    const descriptionContent = document.createElement('div');
    descriptionContent.textContent = work.description;
    description.appendChild(descriptionContent);

    return description;
}

export const renderWorkCard = (work) => {
    const workCard = document.createElement('div');
    workCard.className = 'griditem';

    workCard.appendChild(
        wrapWithLink(work, [renderTitle(work), renderImageOrVideo(work), renderDescription(work)])
    );

    return workCard;
}

const handleFilterClick = (filterButton, tag) => {
    filterButton.onclick = () => {
        if (activeFilters.includes(tag)) {
            filterButton.className = filterButton.className.replace(' active', '');
            activeFilters = activeFilters.filter(activeFilter => activeFilter !== tag);
        } else {
            filterButton.className += ' active';
            activeFilters.push(tag);
        }

        loadWorks();
    };
}

const renderFilters = () => {
    const filterGroup = document.getElementById('filterGroup');

    for (const [filterText, symbol] of TAGS_MAP.entries()) {
        const filter = document.createElement('p');
        filter.className = 'filter-button';
        filter.textContent = `${symbol} ${filterText}`;
        filterGroup.appendChild(filter);
        handleFilterClick(filter, filterText);
    }
}

export const handleWorkFilters = () => {
    renderFilters();
}

export const loadWorks = () => {
    const worksGrid = document.getElementsByClassName('gridcontainer')[0];
    const filteredWorks = activeFilters.length === 0 ? WORKS : WORKS.filter(work =>
        activeFilters.every(filter => work.tags.includes(filter))
    );

    worksGrid.innerHTML = '';

    for (const work of filteredWorks) {
        const workCard = renderWorkCard(work);
        worksGrid.appendChild(workCard);
    }
}

export const handleGridScrolling = () => {
    const margini = document.getElementsByClassName('margini')[0];
    const gridContainer = document.getElementsByClassName('gridcontainer')[0];

    margini.onscroll = (event) => {
        const isCloseToBottom = event.target.scrollTop > margini.clientHeight - 4;

        if (isGridScrollable !== isCloseToBottom) {
            isGridScrollable = isCloseToBottom;

            if (isCloseToBottom) {
                gridContainer.className += ' scrollable';
            } else {
                gridContainer.className = gridContainer.className.replace(' scrollable', '');
            }
        }
    }
}