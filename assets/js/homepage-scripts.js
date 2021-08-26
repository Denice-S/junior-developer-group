
// opens mobile navbar by adding styling to a default 'display: none' style
function showMobileNavigationContent() {
    document.getElementById('mobileNavigationWrapper').style.display ='flex';
}

// closes mobile navbar by resetting styles to default 'display: none' style
function hideMobileNavigationContent() {
    document.getElementById('mobileNavigationWrapper').attributeStyleMap.clear()
}


function openSleepQualityCalculatorWebsite() {
    window.open('https://junior-developer-group.github.io/sleep-quality-calculator/', '_blank');
}

function openCatMatchRepository(){
    window.open('https://github.com/Junior-Developer-Group/cat-match', '_blank');
}

function openHacktoberfest2020Challenge() {
    window.open('https://mateahoward.github.io/hacktoberfest-2020/', '_blank');  
}

function openTeamDashboardRepository() {
    window.open('https://github.com/Junior-Developer-Group/junior-developer-group', '_blank');
}