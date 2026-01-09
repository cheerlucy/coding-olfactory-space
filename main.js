// Hero carousel
let currentImageIndex = 0;
const totalImages = 6;
let autoSlideInterval;

function showImage(index) {
    document.querySelectorAll('.hero-image').forEach(img => img.classList.remove('active'));
    document.querySelectorAll('.indicator-dot').forEach((dot, i) => {
        if (i === index) {
            dot.classList.remove('bg-white/50', 'hover:bg-white/75');
            dot.classList.add('bg-white', 'w-8');
        } else {
            dot.classList.remove('bg-white', 'w-8');
            dot.classList.add('bg-white/50', 'hover:bg-white/75');
        }
    });
    document.getElementById(`hero-img-${index}`).classList.add('active');
    currentImageIndex = index;
}

function nextImage() {
    showImage((currentImageIndex + 1) % totalImages);
    resetAutoSlide();
}

function prevImage() {
    showImage((currentImageIndex - 1 + totalImages) % totalImages);
    resetAutoSlide();
}

function goToImage(index) {
    showImage(index);
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextImage();
    }, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    menu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

// Scroll to section
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
        header.classList.add('shadow-md');
    }
});

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Load news
function loadNews() {
    const newsContainer = document.getElementById('news-list');
    newsContainer.innerHTML = newsData.map(item => `
        <div class="news-item pb-4 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors p-3 rounded -mx-3">
            <div class="flex items-baseline gap-2 mb-2">
                <span class="text-teal-600" style="font-size: 13px; font-weight: 600;">
                    ${formatDate(item.date)}
                </span>
            </div>
            <h4 class="mb-1" style="font-size: 14px; font-weight: 600;">
                ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="text-gray-900 hover:text-teal-600 transition-colors">${item.title}</a>` : `<span class="text-gray-900">${item.title}</span>`}
            </h4>
            <p class="text-gray-600" style="font-size: 13px; line-height: 1.5;">
                ${item.description}
            </p>
        </div>
    `).join('');
}

// Research carousel state management
const researchCarouselStates = {};
const researchCarouselIntervals = {};

function createResearchCarousel(images, projectIndex) {
    if (!images || images.length === 0) return '';

    const carouselId = `research-carousel-${projectIndex}`;
    researchCarouselStates[projectIndex] = { currentIndex: 0, totalImages: images.length };

    return `
        <div class="relative w-48 flex-shrink-0">
            <div class="relative w-full h-36 rounded overflow-hidden" id="${carouselId}">
                ${images.map((img, imgIndex) => `
                    <img src="${img}" 
                         alt="Research Image ${imgIndex + 1}" 
                         class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${imgIndex === 0 ? 'opacity-100' : 'opacity-0'}"
                         id="${carouselId}-img-${imgIndex}"
                         onerror="this.src='https://via.placeholder.com/192x144?text=Image+${imgIndex + 1}'">
                `).join('')}
                ${images.length > 1 ? `
                    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        ${images.map((_, imgIndex) => `
                            <button onclick="goToResearchImage(${projectIndex}, ${imgIndex})"
                                    class="w-2 h-2 rounded-full transition-all ${imgIndex === 0 ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/75'}"
                                    id="${carouselId}-dot-${imgIndex}"></button>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function showResearchImage(projectIndex, imageIndex) {
    const state = researchCarouselStates[projectIndex];
    if (!state) return;

    const carouselId = `research-carousel-${projectIndex}`;

    // Update images
    for (let i = 0; i < state.totalImages; i++) {
        const img = document.getElementById(`${carouselId}-img-${i}`);
        const dot = document.getElementById(`${carouselId}-dot-${i}`);

        if (img) {
            if (i === imageIndex) {
                img.classList.remove('opacity-0');
                img.classList.add('opacity-100');
            } else {
                img.classList.remove('opacity-100');
                img.classList.add('opacity-0');
            }
        }

        if (dot) {
            if (i === imageIndex) {
                dot.classList.remove('bg-white/50', 'hover:bg-white/75', 'w-2');
                dot.classList.add('bg-white', 'w-4');
            } else {
                dot.classList.remove('bg-white', 'w-4');
                dot.classList.add('bg-white/50', 'hover:bg-white/75', 'w-2');
            }
        }
    }

    state.currentIndex = imageIndex;
}

function nextResearchImage(projectIndex) {
    const state = researchCarouselStates[projectIndex];
    if (!state) return;
    const nextIndex = (state.currentIndex + 1) % state.totalImages;
    showResearchImage(projectIndex, nextIndex);
}

function goToResearchImage(projectIndex, imageIndex) {
    showResearchImage(projectIndex, imageIndex);
}

function startResearchCarousel(projectIndex) {
    const state = researchCarouselStates[projectIndex];
    if (!state || state.totalImages <= 1) return;

    researchCarouselIntervals[projectIndex] = setInterval(() => {
        nextResearchImage(projectIndex);
    }, 3000);
}

// Load research projects with images and carousels
function loadResearch() {
    const researchContainer = document.getElementById('research-list');

    researchContainer.innerHTML = researchData.map((project, index) => {
        const hasMultipleImages = project.images && project.images.length > 1;
        const hasSingleImage = project.image;
        const images = project.images || (project.image ? [project.image] : []);

        return `
            <div class="flex gap-4 mb-6">
                ${images.length > 0 ? (hasMultipleImages ? createResearchCarousel(images, index) : `
                    <div class="w-48 flex-shrink-0">
                        <img src="${project.image}" 
                             alt="${project.title}" 
                             class="w-full h-36 object-cover rounded"
                             onerror="this.src='https://via.placeholder.com/192x144?text=Research'">
                    </div>
                `) : ''}
                
                <div class="flex-1">
                    <h6 class="mb-2" style="font-size: 16px; font-weight: 600;">
                        ${project.title}
                    </h6>
                    <p class="text-gray-700 mb-2" style="font-size: 14px; line-height: 1.6;">
                        ${project.summary || project.description}
                    </p>
                    ${project.summary ? `
                        <div>
                            <button onclick="toggleResearchDescription(${index})" 
                                    id="research-toggle-${index}"
                                    class="text-teal-600 hover:text-teal-800 transition-colors" 
                                    style="font-size: 14px;">
                                Read more &rarr;
                            </button>
                            <div id="research-full-${index}" class="hidden mt-2">
                                <p class="text-gray-700 mb-2" style="font-size: 14px; line-height: 1.6;">
                                    ${project.description}
                                </p>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');

    // Start carousels for projects with multiple images
    researchData.forEach((project, index) => {
        if (project.images && project.images.length > 1) {
            startResearchCarousel(index);
        }
    });
}

function toggleResearchDescription(index) {
    const fullDesc = document.getElementById(`research-full-${index}`);
    const toggle = document.getElementById(`research-toggle-${index}`);

    if (fullDesc.classList.contains('hidden')) {
        fullDesc.classList.remove('hidden');
        toggle.innerHTML = 'Show less &rarr;';
    } else {
        fullDesc.classList.add('hidden');
        toggle.innerHTML = 'Read more &rarr;';
    }
}

// BibTeX Modal functions
let currentBibtex = '';
let currentTitle = '';

function openBibtexModal(bibtex, title) {
    currentBibtex = bibtex;
    currentTitle = title;
    const modal = document.getElementById('bibtex-modal');
    const content = document.getElementById('bibtex-content');
    content.textContent = bibtex;
    modal.classList.add('show');
}

function closeBibtexModal() {
    const modal = document.getElementById('bibtex-modal');
    modal.classList.remove('show');
}

function copyBibtex() {
    navigator.clipboard.writeText(currentBibtex).then(() => {
        alert('BibTeX copied to clipboard!');
    });
}

function downloadBibtex() {
    const blob = new Blob([currentBibtex], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.bib`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('bibtex-modal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeBibtexModal();
        }
    });
});

// Publication Image Carousel functions
const carouselStates = {};

function createCarousel(pub, index) {
    const images = pub.images || (pub.image ? [pub.image] : []);
    if (images.length === 0) return '';

    carouselStates[index] = { currentIndex: 0, totalImages: images.length };

    const carouselHTML = `
        <div class="carousel-container" id="carousel-${index}">
            ${images.map((img, imgIndex) => `
                <img src="${img}" 
                     alt="${pub.title} - Image ${imgIndex + 1}" 
                     class="carousel-image ${imgIndex === 0 ? 'active' : ''}" 
                     id="carousel-${index}-img-${imgIndex}"
                     onerror="this.src='https://via.placeholder.com/420x160?text=Image+Not+Available'">
            `).join('')}
            ${images.length > 1 ? `
                <button class="carousel-button prev" onclick="prevCarouselImage(${index})">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button class="carousel-button next" onclick="nextCarouselImage(${index})">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
                <div class="carousel-indicators">
                    ${images.map((_, imgIndex) => `
                        <span class="carousel-indicator ${imgIndex === 0 ? 'active' : ''}" 
                              onclick="goToCarouselImage(${index}, ${imgIndex})"
                              id="carousel-${index}-indicator-${imgIndex}"></span>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;

    return carouselHTML;
}

function showCarouselImage(carouselIndex, imageIndex) {
    const state = carouselStates[carouselIndex];
    if (!state) return;

    // Hide all images
    for (let i = 0; i < state.totalImages; i++) {
        const img = document.getElementById(`carousel-${carouselIndex}-img-${i}`);
        const indicator = document.getElementById(`carousel-${carouselIndex}-indicator-${i}`);
        if (img) img.classList.remove('active');
        if (indicator) indicator.classList.remove('active');
    }

    // Show current image
    const currentImg = document.getElementById(`carousel-${carouselIndex}-img-${imageIndex}`);
    const currentIndicator = document.getElementById(`carousel-${carouselIndex}-indicator-${imageIndex}`);
    if (currentImg) currentImg.classList.add('active');
    if (currentIndicator) currentIndicator.classList.add('active');

    state.currentIndex = imageIndex;
}

function nextCarouselImage(carouselIndex) {
    const state = carouselStates[carouselIndex];
    if (!state) return;
    const nextIndex = (state.currentIndex + 1) % state.totalImages;
    showCarouselImage(carouselIndex, nextIndex);
}

function prevCarouselImage(carouselIndex) {
    const state = carouselStates[carouselIndex];
    if (!state) return;
    const prevIndex = (state.currentIndex - 1 + state.totalImages) % state.totalImages;
    showCarouselImage(carouselIndex, prevIndex);
}

function goToCarouselImage(carouselIndex, imageIndex) {
    showCarouselImage(carouselIndex, imageIndex);
}

// Load publications with beautiful buttons
function loadPublications() {
    const pubContainer = document.getElementById('publications-list');
    pubContainer.innerHTML = publicationsData.map((pub, index) => `
        <div class="publication-card bg-white p-6 rounded-lg shadow-sm mb-6">
            <div class="grid md:grid-cols-3 gap-6">
                <!-- Left: Image Carousel -->
                <div class="md:col-span-1">
                    ${createCarousel(pub, index)}
                </div>
                
                <!-- Right: Publication Info -->
                <div class="md:col-span-2">
                    <h3 class="text-lg font-semibold mb-2">${pub.title}</h3>
                    <p class="text-gray-600 text-sm mb-1">${pub.authors}</p>
                    <p class="text-gray-500 text-sm mb-3">
                        <span class="italic">${pub.journal}</span>, ${pub.year}
                    </p>
                    
                    <!-- Beautiful Action Buttons -->
                    <div class="flex flex-wrap gap-2">
                        ${pub.link && pub.link !== '#' ? `
                            <a href="${pub.link}" target="_blank" rel="noopener noreferrer" 
                               class="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors text-sm font-medium">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                PDF
                            </a>
                        ` : ''}
                        ${pub.doi ? `
                            <a href="${pub.doi}" target="_blank" rel="noopener noreferrer" 
                               class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                </svg>
                                DOI
                            </a>
                        ` : ''}
                        ${pub.publisher ? `
                            <a href="${pub.publisher}" target="_blank" rel="noopener noreferrer" 
                               class="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors text-sm font-medium">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                                </svg>
                                Publisher
                            </a>
                        ` : ''}
                        ${pub.bibtex ? `
                            <button onclick='openBibtexModal(\`${pub.bibtex.replace(/`/g, '\\`')}\`, "${pub.title.replace(/"/g, '&quot;')}")' 
                                    class="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg>
                                BibTeX
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Load team
function loadTeam() {
    const currentTeamContainer = document.getElementById('current-team');

    currentTeamContainer.innerHTML = teamData.current.map(member => `
        <div class="text-center">
            <img src="${member.image}" alt="${member.name}" 
                 class="w-full aspect-square object-cover rounded mb-3"
                 onerror="this.src='https://via.placeholder.com/200?text=${encodeURIComponent(member.name)}'">
            <h4 class="mb-1">
                <a href="${member.link}" target="_blank" rel="noopener noreferrer" 
                   class="text-teal-600 hover:text-teal-800 transition-colors" 
                   style="font-size: 15px;">
                    ${member.name}
                </a>
            </h4>
            <p class="text-gray-600" style="font-size: 13px;">${member.role}</p>
        </div>
    `).join('');
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function () {
    loadNews();
    loadResearch();
    loadPublications();
    loadTeam();
    startAutoSlide();
});