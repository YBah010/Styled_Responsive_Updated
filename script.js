// ==========================================
// Milestone 3 JavaScript
//
// 1. DOM Interaction
// 2. Form Validation
// 3. GitHub API Fetch Bonus
// ==========================================



// ==========================================
// 1. DOM INTERACTION
// Show and hide the skills section
// ==========================================

const toggleSkillsButton =
    document.querySelector("#toggle-skills");

const skillsContent =
    document.querySelector("#skills-content");


if (toggleSkillsButton && skillsContent) {

    toggleSkillsButton.addEventListener(
        "click",
        function () {

            const skillsAreHidden =
                skillsContent.hasAttribute("hidden");


            if (skillsAreHidden) {

                // Show the skills section
                skillsContent.removeAttribute("hidden");

                toggleSkillsButton.textContent =
                    "Hide Skills";

                toggleSkillsButton.setAttribute(
                    "aria-expanded",
                    "true"
                );

            } else {

                // Hide the skills section
                skillsContent.setAttribute(
                    "hidden",
                    ""
                );

                toggleSkillsButton.textContent =
                    "Show Skills";

                toggleSkillsButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}



// ==========================================
// 2. CONTACT FORM VALIDATION
// ==========================================

const contactForm =
    document.querySelector("#contact-form");


if (contactForm) {

    const nameInput =
        document.querySelector("#name");

    const emailInput =
        document.querySelector("#email");

    const subjectInput =
        document.querySelector("#subject");

    const messageInput =
        document.querySelector("#message");

    const formStatus =
        document.querySelector("#form-status");



    // ======================================
    // Show an accessible error message
    // ======================================

    function showError(
        input,
        errorMessage
    ) {

        const errorElement =
            document.querySelector(
                "#" + input.id + "-error"
            );


        input.setAttribute(
            "aria-invalid",
            "true"
        );


        if (errorElement) {

            errorElement.textContent =
                errorMessage;

        }

    }



    // ======================================
    // Clear an error message
    // ======================================

    function clearError(input) {

        const errorElement =
            document.querySelector(
                "#" + input.id + "-error"
            );


        input.removeAttribute(
            "aria-invalid"
        );


        if (errorElement) {

            errorElement.textContent =
                "";

        }

    }



    // ======================================
    // Validate full name
    // ======================================

    function validateName() {

        const nameValue =
            nameInput.value.trim();


        if (nameValue === "") {

            showError(
                nameInput,
                "Please enter your full name."
            );

            return false;

        }


        clearError(nameInput);

        return true;

    }



    // ======================================
    // Validate email address
    // ======================================

    function validateEmail() {

        const emailValue =
            emailInput.value.trim();


        if (emailValue === "") {

            showError(
                emailInput,
                "Please enter your email address."
            );

            return false;

        }


        if (!emailInput.validity.valid) {

            showError(
                emailInput,
                "Please enter a valid email address."
            );

            return false;

        }


        clearError(emailInput);

        return true;

    }



    // ======================================
    // Validate subject
    // ======================================

    function validateSubject() {

        const subjectValue =
            subjectInput.value.trim();


        if (subjectValue === "") {

            showError(
                subjectInput,
                "Please enter a subject."
            );

            return false;

        }


        clearError(subjectInput);

        return true;

    }



    // ======================================
    // Validate message
    // ======================================

    function validateMessage() {

        const messageValue =
            messageInput.value.trim();


        if (messageValue === "") {

            showError(
                messageInput,
                "Please enter a message."
            );

            return false;

        }


        if (messageValue.length < 10) {

            showError(
                messageInput,
                "Your message must be at least 10 characters."
            );

            return false;

        }


        clearError(messageInput);

        return true;

    }



    // ======================================
    // Clear errors when user fixes fields
    // ======================================

    nameInput.addEventListener(
        "input",
        validateName
    );


    emailInput.addEventListener(
        "input",
        validateEmail
    );


    subjectInput.addEventListener(
        "input",
        validateSubject
    );


    messageInput.addEventListener(
        "input",
        validateMessage
    );



    // ======================================
    // Form submission
    // ======================================

    contactForm.addEventListener(
        "submit",
        function (event) {

            // Prevent normal form submission
            event.preventDefault();


            // Validate every field
            const nameIsValid =
                validateName();

            const emailIsValid =
                validateEmail();

            const subjectIsValid =
                validateSubject();

            const messageIsValid =
                validateMessage();


            const formIsValid =
                nameIsValid &&
                emailIsValid &&
                subjectIsValid &&
                messageIsValid;


            // ----------------------------------
            // Form has errors
            // ----------------------------------

            if (!formIsValid) {

                if (formStatus) {

                    formStatus.textContent =
                        "Please correct the errors before submitting the form.";

                }


                // Move keyboard focus to the
                // first invalid field
                const firstInvalidField =
                    contactForm.querySelector(
                        '[aria-invalid="true"]'
                    );


                if (firstInvalidField) {

                    firstInvalidField.focus();

                }


                return;

            }


            // ----------------------------------
            // Form is valid
            // ----------------------------------

            if (formStatus) {

                formStatus.textContent =
                    "Thank you! Your message was completed successfully.";

            }

        }
    );

}



// ==========================================
// 3. OPTIONAL API FETCH BONUS
// Load live GitHub profile information
// ==========================================

const loadGitHubButton =
    document.querySelector("#load-github");

const githubProfile =
    document.querySelector("#github-profile");


if (loadGitHubButton && githubProfile) {

    loadGitHubButton.addEventListener(
        "click",
        async function () {

            // Let the user know data is loading
            githubProfile.textContent =
                "Loading GitHub profile...";


            // Disable button while request runs
            loadGitHubButton.disabled =
                true;


            try {

                // Fetch live GitHub information
                const response =
                    await fetch(
                        "https://api.github.com/users/YBah010"
                    );


                // Check for API error
                if (!response.ok) {

                    throw new Error(
                        "GitHub API request failed."
                    );

                }


                // Convert response to JavaScript data
                const profileData =
                    await response.json();


                // Display live GitHub information
                githubProfile.innerHTML = `
                    <h3>
                        ${profileData.login}
                    </h3>

                    <p>
                        Public repositories:
                        ${profileData.public_repos}
                    </p>

                    <p>
                        Followers:
                        ${profileData.followers}
                    </p>

                    <p>
                        Following:
                        ${profileData.following}
                    </p>

                    <p>
                        <a
                            href="${profileData.html_url}"
                            target="_blank"
                            rel="noopener noreferrer">
                            Visit My GitHub Profile
                        </a>
                    </p>
                `;


                loadGitHubButton.textContent =
                    "Refresh GitHub Profile";

            } catch (error) {

                // Accessible error displayed
                // directly on the page
                githubProfile.textContent =
                    "Sorry, the GitHub profile could not be loaded right now.";

            } finally {

                // Re-enable button
                loadGitHubButton.disabled =
                    false;

            }

        }
    );

}