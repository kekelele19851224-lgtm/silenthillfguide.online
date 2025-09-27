// Puzzle content data
const puzzleData = {
    shrine: {
        title: "Shrine Vault Puzzle Solution",
        content: `
            <h2>Shrine Vault Puzzle Solution</h2>
            <p>The Shrine Vault Puzzle is one of the most challenging puzzles in Silent Hill f. Follow these step-by-step solutions for each difficulty level.</p>
            
            <div class="difficulty-section">
                <h3>Story Difficulty</h3>
                <div class="puzzle-step">
                    <img src="images/shrine-step1.jpg" alt="Shrine Vault Puzzle Step 1" loading="lazy">
                    <p><strong>Step 1:</strong> Find the symbols 'Serpent', 'Turtle', and 'Crane' in that exact order. These symbols represent the three guardian spirits of the shrine.</p>
                </div>
                <div class="puzzle-step">
                    <p><strong>Solution:</strong> Input the symbols in sequence: 蛇 (Serpent) → 龟 (Turtle) → 鹤 (Crane)</p>
                </div>
            </div>

            <div class="difficulty-section">
                <h3>Hard Difficulty</h3>
                <div class="puzzle-step">
                    <img src="images/shrine-step2.jpg" alt="Shrine Vault Puzzle Step 2" loading="lazy">
                    <p><strong>Step 1:</strong> Find the symbols 'Tree', 'Kudzu', and 'Lightning' in that exact order. These represent the natural forces that protect the shrine.</p>
                </div>
                <div class="puzzle-step">
                    <p><strong>Solution:</strong> Input the symbols in sequence: 树 (Tree) → 葛藤 (Kudzu) → 闪电 (Lightning)</p>
                </div>
            </div>

            <div class="difficulty-section">
                <h3>Lost in the Fog Difficulty</h3>
                <div class="puzzle-step">
                    <img src="images/shrine-step3.jpg" alt="Shrine Vault Puzzle Step 3" loading="lazy">
                    <p><strong>Step 1:</strong> Use the yokai's characteristics to determine the correct symbols. Study the ancient texts found throughout the shrine.</p>
                </div>
                <div class="puzzle-step">
                    <p><strong>Solution:</strong> The correct sequence changes based on the yokai encountered. Look for clues in the environment and match the symbols to the yokai's nature.</p>
                </div>
            </div>

            <div class="tips-section">
                <h3>Tips and Hints</h3>
                <ul>
                    <li>Pay attention to the wall paintings - they contain visual clues</li>
                    <li>The difficulty level affects which symbols are required</li>
                    <li>Save your game before attempting the puzzle</li>
                    <li>If you fail, the symbols may reset - check carefully</li>
                </ul>
            </div>
        `
    },
    
    scarecrow: {
        title: "Scarecrow Field Puzzle Solution",
        content: `
            <h2>Scarecrow Field Puzzle Solution</h2>
            <p>Navigate through the haunting scarecrow field by identifying the correct guardian for each difficulty level.</p>
            
            <div class="difficulty-section">
                <h3>Story Difficulty</h3>
                <div class="puzzle-step">
                    <img src="images/scarecrow-step1.jpg" alt="Scarecrow Field Puzzle Step 1" loading="lazy">
                    <p><strong>Step 1:</strong> Identify the scarecrow holding a sickle. This scarecrow stands out among the others with its distinctive farming tool.</p>
                </div>
                <div class="puzzle-step">
                    <p><strong>Solution:</strong> Look for the scarecrow in the third row, second position from the left. It's the only one with a rusty sickle in its right hand.</p>
                </div>
            </div>

            <div class="difficulty-section">
                <h3>Hard Difficulty</h3>
                <div class="puzzle-step">
                    <img src="images/scarecrow-step2.jpg" alt="Scarecrow Field Puzzle Step 2" loading="lazy">
                    <p><strong>Step 1:</strong> Identify the scarecrow with a sad expression. The facial features are subtle but distinctive when examined closely.</p>
                </div>
                <div class="puzzle-step">
                    <p><strong>Solution:</strong> The sad scarecrow is located in the second row, fourth position. Its burlap face shows downturned stitched features.</p>
                </div>
            </div>

            <div class="difficulty-section">
                <h3>Lost in the Fog Difficulty</h3>
                <div class="puzzle-step">
                    <img src="images/scarecrow-step3.jpg" alt="Scarecrow Field Puzzle Step 3" loading="lazy">
                    <p><strong>Step 1:</strong> Identify the scarecrow with a false smile. This deceptive expression hides something sinister beneath.</p>
                </div>
                <div class="puzzle-step">
                    <p><strong>Solution:</strong> The false smile scarecrow changes position based on your previous choices. Look for unnatural stitching patterns and eyes that don't match the smile.</p>
                </div>
            </div>

            <div class="tips-section">
                <h3>Tips and Hints</h3>
                <ul>
                    <li>Use your flashlight to examine each scarecrow carefully</li>
                    <li>The correct scarecrow may move between visits</li>
                    <li>Listen for audio cues - the right scarecrow makes different sounds</li>
                    <li>Don't rush - take time to study each scarecrow's features</li>
                </ul>
            </div>
        `
    },
    
    locker: {
        title: "School Locker Codes",
        content: `
            <h2>School Locker Codes</h2>
            <p>Access all student lockers in the school area with these verified combination codes.</p>
            
            <div class="locker-section">
                <h3>Asakura Ayumi's Locker</h3>
                <div class="puzzle-step">
                    <img src="images/locker-ayumi.jpg" alt="Asakura Ayumi Locker Code" loading="lazy">
                    <p><strong>Code varies by difficulty:</strong></p>
                    <ul>
                        <li><strong>Story:</strong> 273</li>
                        <li><strong>Hard:</strong> 892</li>
                        <li><strong>Lost in the Fog:</strong> 156</li>
                    </ul>
                    <p>Contains: School ID, personal diary, and a key item for progression.</p>
                </div>
            </div>

            <div class="locker-section">
                <h3>Aoi Takeshi's Locker</h3>
                <div class="puzzle-step">
                    <img src="images/locker-takeshi.jpg" alt="Aoi Takeshi Locker Code" loading="lazy">
                    <p><strong>Code:</strong> 401 (same for all difficulties)</p>
                    <p>Contains: Sports equipment, energy drink, and a photograph with hidden clues.</p>
                </div>
            </div>

            <div class="locker-section">
                <h3>Tsuchiya Taiko's Locker</h3>
                <div class="puzzle-step">
                    <img src="images/locker-taiko.jpg" alt="Tsuchiya Taiko Locker Code" loading="lazy">
                    <p><strong>Code:</strong> 377 (same for all difficulties)</p>
                    <p>Contains: Art supplies, sketchbook with important drawings, and a mysterious letter.</p>
                </div>
            </div>

            <div class="locker-section">
                <h3>Suga Yosie's Locker</h3>
                <div class="puzzle-step">
                    <img src="images/locker-yosie.jpg" alt="Suga Yosie Locker Code" loading="lazy">
                    <p><strong>Code:</strong> 505 (same for all difficulties)</p>
                    <p>Contains: Medical supplies, prescription bottle, and a research notebook with vital information.</p>
                </div>
            </div>

            <div class="tips-section">
                <h3>Tips and Hints</h3>
                <ul>
                    <li>Some locker codes change based on difficulty level</li>
                    <li>Check all lockers for complete item collection</li>
                    <li>Items found may be required for other puzzles</li>
                    <li>Save before opening lockers in case you need to retry</li>
                    <li>Read all documents found - they contain important story elements</li>
                </ul>
            </div>
        `
    }
};

// Function to show puzzle details
function showPuzzle(puzzleType) {
    const puzzleDetails = document.getElementById('puzzle-details');
    const contentContainer = document.getElementById('puzzle-content-container');
    
    if (puzzleData[puzzleType]) {
        contentContainer.innerHTML = puzzleData[puzzleType].content;
        puzzleDetails.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// Function to close puzzle details
function closePuzzle() {
    const puzzleDetails = document.getElementById('puzzle-details');
    puzzleDetails.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close puzzle details when clicking outside
    document.getElementById('puzzle-details').addEventListener('click', function(e) {
        if (e.target === this) {
            closePuzzle();
        }
    });

    // Close puzzle details with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePuzzle();
        }
    });
});

// SEO and analytics helper functions
function trackPuzzleView(puzzleType) {
    // Google Analytics tracking (if implemented)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'puzzle_view', {
            'puzzle_type': puzzleType,
            'event_category': 'engagement'
        });
    }
}

// Add click tracking to puzzle cards
document.addEventListener('DOMContentLoaded', function() {
    const puzzleCards = document.querySelectorAll('.puzzle-card');
    
    puzzleCards.forEach(card => {
        card.addEventListener('click', function() {
            const puzzleType = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            trackPuzzleView(puzzleType);
        });
    });
});