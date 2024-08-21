'use strict';

$(function(){
    $('a[href^="#"]').click(function(){
      const adjust = -($(window).height() * 0.1);
      const speed = 100;
      const href= $(this).attr("href");
      const target = $(href == "#" || href == "" ? 'html' : href);
      const position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
});

$(function () {
    $(".top-img, .top-title__sub, .top-title__main, .top-title__text, .top-title__entry, .point-container, .flow-container, .job-container, .entry-section, .voice-list__contents").on("inview", function (isInView) {
        if (isInView) {
            $(this).addClass($(this).attr("class") + "--inview");
            $(this).off("inview"); 
        }
    });
});

$(document).ready(function() {
    const entryBtn = $('#entrybtn');
    const entryBtn2 = $('#entrybtn2');
    const entryTab = $('#entry-form');
    const contactTab = $('#contact-form');
    const formContainer = $('.form');
    const contactBtn = $('#contactbtn');
    const contactBtn2 = $('#contactbtn2');
    const scrollBtn = $('#scroll-btn');
    const entry = $('#entry-tab');
    const contact2 = $('#contact-tab');

    entryBtn.on('click', function() {
        if (formContainer.hasClass('contact-form--open')) {
            entryTab.addClass('entry-form--open').removeClass('entry-form');
            contactTab.removeClass('contact-form--open').addClass('contact-form');
        }
    });

    entryBtn2.on('click', function() {
        if (formContainer.hasClass('contact-form--open')) {
            entryTab.addClass('entry-form--open').removeClass('entry-form');
            contactTab.removeClass('contact-form--open').addClass('contact-form');
        }
    });

    contactBtn.on('click', function() {
        if (formContainer.hasClass('entry-form--open')) {
            entryTab.addClass('entry-form').removeClass('entry-form--open');
            contactTab.removeClass('contact-form').addClass('contact-form--open');
        } else {
            entryTab.addClass('entry-form').removeClass('entry-form--open');
            contactTab.removeClass('contact-form').addClass('contact-form--open');
        }
    });

    contactBtn2.on('click', function() {
        if (formContainer.hasClass('entry-form--open')) {
            entryTab.addClass('entry-form').removeClass('entry-form--open');
            contactTab.removeClass('contact-form').addClass('contact-form--open');
        } else {
            entryTab.addClass('entry-form').removeClass('entry-form--open');
            contactTab.removeClass('contact-form').addClass('contact-form--open');
        }
    });

    scrollBtn.on('click', function() {
        if (formContainer.hasClass('contact-form--open')) {
            entryTab.addClass('entry-form--open').removeClass('entry-form');
            contactTab.removeClass('contact-form--open').addClass('contact-form');
        }
    });

    entry.on('click', function() {
        entryTab.addClass('entry-form--open').removeClass('entry-form');
        contactTab.removeClass('contact-form--open').addClass('contact-form');
    });

    contact2.on('click', function() {
        entryTab.addClass('entry-form').removeClass('entry-form--open');
        contactTab.removeClass('contact-form').addClass('contact-form--open');
    });
});

$(document).ready(function() {
    const $pripoliModalBg = $('.pripoli-container');
    const $pripoliModal = $('.pripoli-modal');
    const $pripoliBtn = $('#contact-pripoli');
    const $pripoliBtn2 = $('#entry-pripoli');
    const $bodyFix = $('.body');
    const $pripoliClosebtn = $('#pripoli-closebtn');
    const $footerPripoli = $('#pripoli');
    const $pripoliscroll = $('.pripoli-modal__contents__detail');

    let scrollPosition = 0;

    const ua = window.navigator.userAgent.toLowerCase();
    const isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;


    function bodyFixedOn() {
        if (isiOS) {
            scrollPosition = $(window).scrollTop();
            $('body').css('position', 'fixed');
            $('body').css('top', '-' + scrollPosition + 'px');
        }
    }

    function bodyFixedOff() {
        if (isiOS) {
            $('body').css('position', '');
            $('body').css('top', '');
            $(window).scrollTop(scrollPosition);
        } else {
            $('body').css('overflow', '');
        }
    }

    function openModal() {
        scrollPosition = $pripoliscroll.scrollTop();
        $pripoliModalBg.addClass('pripoli-modal__bg');
        $pripoliModal.addClass('pripoli-modal--open').removeClass('pripoli-modal--close');
        $bodyFix.addClass('body-fixed');
        bodyFixedOn();
    }

    function closeModal() {
        $pripoliModalBg.removeClass('pripoli-modal__bg');
        $pripoliModal.removeClass('pripoli-modal--open').addClass('pripoli-modal--close');
        $bodyFix.removeClass('body-fixed');
        bodyFixedOff();
        scrollPosition = 0;
    }

    function resetScrollPosition() {
        $pripoliscroll.scrollTop(0);
    }

    $pripoliBtn.on('click', function () {
        openModal();
        resetScrollPosition();
    });

    $pripoliBtn2.on('click', function () {
        openModal();
        resetScrollPosition();
    });

    $footerPripoli.on('click', function () {
        openModal();
        resetScrollPosition();
    });

    $pripoliClosebtn.on('click', function() {
        closeModal();
        resetScrollPosition();
    });

    $pripoliModalBg.on('click', function(event) {
        if(!$(event.target).closest('.pripoli-modal').length) {
            closeModal();
            resetScrollPosition();
        }
    });
});

$(document).ready(function() {
    const $companyModalBg = $('.company-container');
    const $companyModal = $('.company-modal');
    const $companyBtn = $('#company');
    const $bodyFix = $('.body');
    const $companyClosebtn = $('#company-closebtn');
    const $companyscroll = $('.company-modal__contents');

    let scrollPosition = 0;

    const ua = window.navigator.userAgent.toLowerCase();
    const isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;

    function bodyFixedOn() {
        if (isiOS) {
            scrollPosition = $(window).scrollTop();
            $('body').css('position', 'fixed');
            $('body').css('top', '-' + scrollPosition + 'px');
        } 
    }

    function bodyFixedOff() {
        if (isiOS) {
            $('body').css('position', '');
            $('body').css('top', '');
            $(window).scrollTop(scrollPosition);
        }
    }

    function openModal() {
        scrollPosition = $companyscroll.scrollTop();
        $companyModalBg.addClass('company-modal__bg');
        $companyModal.addClass('company-modal--open').removeClass('company-modal--close');
        $bodyFix.addClass('body-fixed');
        bodyFixedOn(); 
    }

    function closeModal() {
        $companyModalBg.removeClass('company-modal__bg');
        $companyModal.removeClass('company-modal--open').addClass('company-modal--close');
        $bodyFix.removeClass('body-fixed');
        bodyFixedOff();  
        scrollPosition = 0;
    }

    function resetScrollPosition() {
        $companyscroll.scrollTop(0);
    }

    $companyBtn.on('click', function () {
        openModal();
        resetScrollPosition();
    });

    $companyClosebtn.on('click', function() {
        closeModal();
        resetScrollPosition();
    });

    $companyModalBg.on('click', function(event) {
        if(!$(event.target).closest('.company-modal').length) {
            closeModal();
            resetScrollPosition();
        }
    });
});

$(document).ready(function() {
    const $naviBtn = $('.navi-btn');
    const $naviBtnParts = $('.navi-btn__parts');
    const $navi = $('.navi');
    const $jumpLink = $('.navi-list__contents__link');

    $naviBtn.on('click', function() {
        $naviBtnParts.toggleClass('open');
        $navi.toggleClass('navi--open');
    });
    $jumpLink.on('click', function() {
        $naviBtnParts.removeClass('open');
        $navi.removeClass('navi--open');
    });
});


$(window).scroll(function() {
    const topSection = $('#top');
    const entrySection = $('#entry');
    const footer = $('#footer');
    const entryScrollbtn = $('.scroll-btn-container');

    const scrollTop = $(window).scrollTop();
    const entrySectionTop = entrySection.offset().top;
    const footerTop = footer.offset().top;
    const topSectionBottom = topSection.offset().top + topSection.outerHeight();

    if (scrollTop >= entrySectionTop && scrollTop < footerTop) {
        entryScrollbtn.removeClass('scroll-btn-container--show');
    } else if (scrollTop >= topSectionBottom && scrollTop < entrySectionTop) {
        entryScrollbtn.addClass('scroll-btn-container--show');
    } else {
        entryScrollbtn.removeClass('scroll-btn-container--show');
    }

    if (scrollTop <= topSection.offset().top || scrollTop <= topSectionBottom) {
        entryScrollbtn.removeClass('scroll-btn-container--show');
    }
});

$(document).ready(function() {
    const $nameInput = $('#contact-name'); 
    const $emailInput = $('#contact-email'); 
    const $telInput = $('#contact-tel');
    const $messageTextarea = $('#contact-contents'); 
    const $privacyCheckbox = $('#pripoli-check');
    const $form = $('#contact-form-section');

    $nameInput.on('input', function() {
        clearError($('#name-required-errormessage'));
        clearError($('#name-errormessage'));
        validateName();
    });

    $emailInput.on('input', function() {
        clearError($('#email-required-errormessage'));
        clearError($('#email-required-errormessage-down'));
        clearError($('#email-errormessage'));
        validateEmail();
    });

    $telInput.on('input', function() {
        clearError($('#tel-required-errormessage'));
        clearError($('#tel-errormessage'));
        validateTel();
    });

    $messageTextarea.on('input', function() {
        clearError($('#message-required-errormessage'));
        clearError($('#message-errormessage'));
        validateMessage();
    });
    
    $privacyCheckbox.on('change', function() {
        if ($privacyCheckbox.prop('checked')) {
            $('#privacy-errormessage').remove();
        }
    });

    $form.on('submit', async function(event) {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const formData = new FormData(this);
            
            const $loadingIcon = $('<span class="loading"></span>');
            $(this).find('.form__section__detail__submit').append($loadingIcon);
    
            try {
                const response = await fetch('https://www.factorx.jp/api/v2/lp/inquiries', {
                    method: 'POST',
                    body: formData,
                });
                if (response.ok) {
                    resetForm();
                    successModal();
                } else {
                    failureModal();
                }
            } catch (error) {
                console.error('Error:', error);
                failureModal();
            } finally {
                $loadingIcon.remove();
            }
        } else {
            scrollToFirstError($('#contact-form-section'));
        }
    });

    function validateForm() {

        $('#name-required-errormessage').remove();
        $('#email-required-errormessage').remove();
        $('#email-required-errormessage-down').remove();
        $('#message-required-errormessage').remove();
        $('#privacy-errormessage').remove();

        let isValid = true;
        let isRequiredError = false;

        if (!$nameInput.val()) {
            isRequiredError = true;
        } else if (!validateName()) {
            isValid = false;
        }

        if (!$emailInput.val()) {
            isRequiredError = true;
        } else if (!validateEmail()) {
            isValid = false;
        }

        if (!validateTel()) {
            isValid = false;
            isRequiredError = true;
        }

        if (!$messageTextarea.val()) {
            isRequiredError = true;
        } else if (!validateMessage()) {
            isValid = false;
        }

        if (!$privacyCheckbox.prop('checked')) {
            const $privacyErrorMessage = $('<p>').attr('id', 'privacy-errormessage').text('送信するにはプライバシーポリシーの同意が必要です。');
            
            if (!$privacyCheckbox.closest('.form__section').find('#privacy-errormessage').length) {
                $privacyCheckbox.closest('.form__section').find('.form__section__detail__submit').before($privacyErrorMessage);
            }
            isValid = false;
        } else {
            $('#privacy-errormessage').remove();
        }

        if (isRequiredError) {
            if($nameInput.val() === '') {
                const $nameRequiredErrorMessage = $('<p>').attr('id', 'name-required-errormessage').text('お名前は入力必須です。');
                    
                if (!$nameInput.closest('.form__section__detail').find('#name-required-errormessage').length) {
                    $nameInput.closest('.form__section__detail').append($nameRequiredErrorMessage); 
                }
            }
            if ($emailInput.val() === '') {
                const $emailRequiredErrorMessage = $('<p>').attr('id', 'email-required-errormessage').text('メールアドレスは入力必須です。');
                $emailInput.css('marginBottom', '0').after($emailRequiredErrorMessage); 

                const $emailRequiredErrorMessageDown = $('<p>').attr('id', 'email-required-errormessage-down').text('メールアドレスは入力必須です。');

                $('#email-required-errormessage').remove();
                $('#email-required-errormessage-down').remove();
            
                if (!$emailInput.closest('.form__section__detail').find('#email-required-errormessage').length && !$emailInput.closest('.form__section__detail').find('#email-errormessage').length) {
                    $emailInput.closest('.form__section__detail').find('#contact-email').after($emailRequiredErrorMessage);
                }
            
                if (!$emailInput.closest('.form__section__detail').find('#email-required-errormessage').length && $emailInput.closest('.form__section__detail').find('#email-errormessage').length) {
                    $('#email-required-errormessage').remove();
                    validateEmail();
                    $emailInput.closest('.form__section__detail').find('#email-errormessage').after($emailRequiredErrorMessageDown);
                }
            }
            if($messageTextarea.val() === '') {
                const $messageRequiredErrorMessage = $('<p>').attr('id', 'message-required-errormessage').text('お問い合わせ内容は入力必須です。');
                    
                if (!$messageTextarea.closest('.form__section__detail').find('#message-required-errormessage').length) {
                    $messageTextarea.closest('.form__section__detail').append($messageRequiredErrorMessage); 
                }
            }
            isValid = false;
        } else {
            $('#name-required-errormessage').remove();
            $('#email-required-errormessage').remove();
            $('#email-required-errormessage-down').remove();
            $('#message-required-errormessage').remove();
        }
        return isValid;
    }

    function clearError($errorMessageElement) {
        $errorMessageElement.remove();
    }

    function validateName() {
        const nameRegex =  /^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\uFF21-\uFF5A\uFF41-\uFF5A]+$/;
        const isNameValid = nameRegex.test($nameInput.val()); 
        let $nameErrorMessage = $('#name-errormessage');
        if (!$nameErrorMessage.length) {
            $nameErrorMessage = createErrorMessage('name-errormessage', $nameInput);
        }
        if (!isNameValid) {
            displayError($nameErrorMessage, "ひらがな、カタカナ、漢字、または英字（全角）で入力してください。");
            $nameInput.val(''); 
        } else {
            hideError($nameErrorMessage); 
        }
        return isNameValid;
    }

    function validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        const isEmailValid = emailRegex.test($emailInput.val()); 
        let $emailErrorMessage = $('#email-errormessage');
        if (!$emailErrorMessage.length) {
            $emailErrorMessage = $('<p>').attr('id', 'email-errormessage').css({
                color: '#D21744',
                fontSize: '0.75rem',
                margin: '8px 0 8px'
            });
            $emailInput.css('marginBottom', '0').after($emailErrorMessage); 
        }
        if (!isEmailValid) {
            displayError($emailErrorMessage, "正しいメールアドレスを入力してください。");
        } else {
            hideError($emailErrorMessage); 
        }
        return isEmailValid;
    }

    function validateTel() {
        const telRegex = /^\d{10,11}$/;
        const telValue = $telInput.val().trim();
        const isTelValid = telRegex.test(telValue);
        let $telErrorMessage = $('#tel-errormessage');
        if (!$telErrorMessage.length) {
            $telErrorMessage = createErrorMessage('tel-errormessage', $telInput);
        }
        if (!isTelValid && telValue) { 
            displayError($telErrorMessage, "正しい電話番号を入力してください。");
        } else {
            hideError($telErrorMessage); 
        }
        return isTelValid || !telValue;
    }

    function validateMessage() {
        const isMessageValid = $messageTextarea.val().length <= 1000;
        let $messageErrorMessage = $('#message-errormessage');
        if (!$messageErrorMessage.length) {
            $messageErrorMessage = createErrorMessage('message-errormessage', $messageTextarea);
        }
        if (!isMessageValid) {
            displayError($messageErrorMessage, "1000文字以内で入力してください。");
        } else {
            hideError($messageErrorMessage); 
        }
        return isMessageValid;
    }

    function createErrorMessage(id, $inputElement) {
        const $errorMessage = $('<p>').attr('id', id);
        $inputElement.parent().append($errorMessage); 
        return $errorMessage;
    }

    function displayError($errorMessageElement, message) {
        $errorMessageElement.text(message);
    }

    function hideError($errorMessageElement) {
        $errorMessageElement.text('');
    }

    function preventEnterSubmit(event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }

    function scrollToFirstError($form) {
        const firstErrorElement = $form.find('.form__section__detail [id$="-errormessage"]:visible').first();
        if (firstErrorElement.length) {
            const inputField = firstErrorElement.closest('.form__section__detail').find('input, textarea').first();
            if (inputField.length) {
                $('html, body').animate({
                    scrollTop: inputField.offset().top - 120
                }, 100);
            }
            const errorMessage = '入力内容に不備があります。再度ご確認ください。';
            if (!$form.find('.submit-error').length) {
                $form.prepend('<p class="submit-error">' + errorMessage + '</p>');
            }
        }
    }

    function resetForm() {
        $nameInput.val('');
        $emailInput.val('');
        $telInput.val('');
        $messageTextarea.val('');
        $privacyCheckbox.prop('checked', false);
        $('#name-required-errormessage').remove();
        $('#email-required-errormessage').remove();
        $('#email-required-errormessage-down').remove();
        $('#email-errormessage').remove();
        $('#message-required-errormessage').remove();
        $('#privacy-errormessage').remove();
        $('.submit-error').remove();
        $emailInput.css('margin-bottom', '16px');
    }

    $nameInput.on('keydown', preventEnterSubmit);
    $emailInput.on('keydown', preventEnterSubmit);
    $telInput.on('keydown', preventEnterSubmit);
    $messageTextarea.on('keydown', preventEnterSubmit);

    $form.on('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
        }
    });
});

$(document).ready(function() {
    const $nameInput2 = $('#contact-name2'); 
    const $emailInput2 = $('#contact-email2'); 
    const $telInput2 = $('#contact-tel2');
    const $periodSelect = $('#contact-period');
    const $messageTextarea2 = $('#contact-contents2'); 
    const $privacyCheckbox2 = $('#pripoli-check2');
    const $form2 = $('#entry-form-section');

    $nameInput2.on('input', function() {
        clearError2($('#name-required-errormessage2'));
        clearError2($('#name-errormessage2'));
        validateName2();
    });

    $emailInput2.on('input', function() {
        clearError2($('#email-required-errormessage2'));
        clearError2($('#email-required-errormessage-down2'));
        clearError2($('#email-errormessage2'));
        validateEmail2();
    });

    $telInput2.on('input', function() {
        clearError2($('#tel-required-errormessage2'));
        clearError2($('#tel-errormessage2'));
        validateTel2();
    });

    $periodSelect.on('change', function() {
        if ($periodSelect.val()) {
            $('#period-errormessage2').remove();
        }
    });

    $messageTextarea2.on('input', function() {
        clearError2($('#message-required-errormessage2'));
        clearError2($('#message-errormessage2'));
        validateMessage2();
    });

    $privacyCheckbox2.on('change', function() {
        if ($privacyCheckbox2.prop('checked')) {
            $('#privacy-errormessage2').remove();
        }
    });

    $form2.on('submit', async function(event) {
        event.preventDefault();
        const isValid2 = validateForm2();
        if (isValid2) {
            const formData = new FormData(this);

            const $loadingIcon = $('<span class="loading"></span>');
            $(this).find('.form__section__detail__submit').append($loadingIcon);

            try {
                const response = await fetch('https://www.factorx.jp/api/v2/lp/inquiries', {
                    method: 'POST',
                    body: formData,
                });
                if (response.ok) {
                    resetForm2();
                    successModal();
                } else {
                    failureModal();
                }
            } catch (error) {
                console.error('Error:', error);
                failureModal();
            } finally {
                $loadingIcon.remove();
            }
        } else {
            scrollToFirstError2($('#entry-form-section'));
        }
    });

    function validateForm2() {

        $('#name-required-errormessage2').remove();
        $('#email-required-errormessage2').remove();
        $('#message-required-errormessage2').remove();
        $('#email-required-errormessage-down2').remove();
        $('#privacy-errormessage2').remove();
        $('#period-errormessage2').remove(); 

        let isValid2 = true;
        let isRequiredError2 = false;
    
        if (!$nameInput2.val()) {
            isRequiredError2 = true;
        } else if (!validateName2()) {
            isValid2 = false;
        }
    
        if (!$emailInput2.val()) {
            isRequiredError2 = true;
        } else if (!validateEmail2()) {
            isValid2 = false;
        }
    
        if (!validateTel2()) {
            isValid2 = false;
            isRequiredError2 = true;
        }

        if (!validateMessage2()) {
            isValid2 = false;
            isRequiredError2 = true;
        }

        if (!$periodSelect.val()) {
            const $periodErrorMessage = $('<p>').attr('id', 'period-errormessage2').text('就職・転職希望時期を選択してください。');
    
            if (!$periodSelect.closest('.form__section__detail').find('#period-errormessage2').length) {
                $periodSelect.closest('.form__section__detail').append($periodErrorMessage); 
            }
            isValid2 = false;
        } else {
            $('#period-errormessage2').remove();
        }

        if (!$privacyCheckbox2.prop('checked')) {
            const $privacyErrorMessage2 = $('<p>').attr('id', 'privacy-errormessage2').text('送信するにはプライバシーポリシーの同意が必要です。');
            
            if (!$privacyCheckbox2.closest('.form__section').find('#privacy-errormessage2').length) {
                $privacyCheckbox2.closest('.form__section').find('.form__section__detail__submit').before($privacyErrorMessage2);
            }
            isValid2 = false;
        } else {
            $('#privacy-errormessage2').remove();
        }

        if (isRequiredError2) {
            if($nameInput2.val() === '') {
                const $nameRequiredErrorMessage2 = $('<p>').attr('id', 'name-required-errormessage2').text('お名前は入力必須です。');
                    
                if (!$nameInput2.closest('.form__section__detail').find('#name-required-errormessage2').length) {
                    $nameInput2.closest('.form__section__detail').append($nameRequiredErrorMessage2); 
                }
            }
            if($emailInput2.val() === '') {
                const $emailRequiredErrorMessage2 = $('<p>').attr('id', 'email-required-errormessage2').text('メールアドレスは入力必須です。');
                $emailInput2.css('marginBottom', '0').after($emailRequiredErrorMessage2); 
                    
                const $emailRequiredErrorMessageDown2 = $('<p>').attr('id', 'email-required-errormessage-down2').text('メールアドレスは入力必須です。');

                $('#email-required-errormessage2').remove();
                $('#email-required-errormessage-down2').remove();
            
                if (!$emailInput2.closest('.form__section__detail').find('#email-required-errormessage2').length && !$emailInput2.closest('.form__section__detail').find('#email-errormessage2').length) {
                    $emailInput2.closest('.form__section__detail').find('#contact-email2').after($emailRequiredErrorMessage2);
                }
            
                if (!$emailInput2.closest('.form__section__detail').find('#email-required-errormessage2').length && $emailInput2.closest('.form__section__detail').find('#email-errormessage2').length) {
                    $('#email-required-errormessage2').remove();
                    validateEmail2();
                    $emailInput2.closest('.form__section__detail').find('#email-errormessage2').after($emailRequiredErrorMessageDown2);
                }
            }
        } else {
            $('#name-required-errormessage2').remove();
            $('#email-required-errormessage2').remove();
            $('#email-required-errormessage-down2').remove();
        }
        return isValid2;
    }

    function clearError2($errorMessageElement2) {
        $errorMessageElement2.remove();
    }

    function validateName2() {
        const nameRegex2 = /^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\uFF21-\uFF5A\uFF41-\uFF5A]+$/;
        const isNameValid2 = nameRegex2.test($nameInput2.val()); 
        let $nameErrorMessage2 = $('#name-errormessage2');
        if (!$nameErrorMessage2.length) {
            $nameErrorMessage2 = createErrorMessage2('name-errormessage2', $nameInput2);
        }
        if (!isNameValid2) {
            displayError2($nameErrorMessage2, "ひらがな、カタカナ、漢字、または英字（全角）で入力してください。");
            $nameInput2.val(''); 
        } else {
            hideError2($nameErrorMessage2); 
        }
        return isNameValid2;
    }

    function validateEmail2() {
        const emailRegex2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        const isEmailValid2 = emailRegex2.test($emailInput2.val()); 
        let $emailErrorMessage2 = $('#email-errormessage2');
        if (!$emailErrorMessage2.length) {
            $emailErrorMessage2 = $('<p>').attr('id', 'email-errormessage2').css({
                color: '#D21744',
                fontSize: '0.75rem',
                margin: '8px 0 8px'
            });
            $emailInput2.css('marginBottom', '0').after($emailErrorMessage2); 
        }
        if (!isEmailValid2) {
            displayError2($emailErrorMessage2, "正しいメールアドレスを入力してください。");
        } else {
            hideError2($emailErrorMessage2); 
        }
        return isEmailValid2;
    }

    function validateTel2() {
        const telRegex2 = /^\d{10,11}$/;
        const telValue2 = $telInput2.val().trim();
        const isTelValid2 = telRegex2.test(telValue2);
        let $telErrorMessage2 = $('#tel-errormessage2');
        if (!$telErrorMessage2.length) {
            $telErrorMessage2 = createErrorMessage2('tel-errormessage2', $telInput2);
        }
        if (!isTelValid2 && $telInput2.val()) {  
            displayError2($telErrorMessage2, "正しい電話番号を入力してください。");
        } else {
            hideError2($telErrorMessage2);  
        }
        return isTelValid2 || !telValue2;
    }

    function validateMessage2() {
        const isMessageValid2 = $messageTextarea2.val().length <= 1000;
        let $messageErrorMessage2 = $('#message-errormessage2');
        if (!$messageErrorMessage2.length) {
            $messageErrorMessage2 = createErrorMessage2('message-errormessage2', $messageTextarea2);
        }
        if (!isMessageValid2) {
            displayError2($messageErrorMessage2, "1000文字以内で入力してください。");
        } else {
            hideError2($messageErrorMessage2); 
        }
        return isMessageValid2;
    }

    function createErrorMessage2(id, $inputElement2) {
        const $errorMessage2 = $('<p>').attr('id', id);
        $inputElement2.parent().append($errorMessage2); 
        return $errorMessage2;
    }

    function displayError2($errorMessageElement2, message) {
        $errorMessageElement2.text(message);
    }

    function hideError2($errorMessageElement2) {
        $errorMessageElement2.text('');
    }

    function preventEnterSubmit2(event) {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }

    function scrollToFirstError2($form) {
        const firstErrorElement = $form.find('.form__section__detail [id$="-errormessage2"]:visible').first();
        if (firstErrorElement.length) {
            const inputField = firstErrorElement.closest('.form__section__detail').find('input, textarea').first();
            if (inputField.length) {
                $('html, body').animate({
                    scrollTop: inputField.offset().top - 120
                }, 100);
            }
            const errorMessage = '入力内容に不備があります。再度ご確認ください。';
            if (!$form.find('.submit-error').length) {
                $form.prepend('<p class="submit-error">' + errorMessage + '</p>');
            }
        }
    }

    function resetForm2() {
        $nameInput2.val('');
        $emailInput2.val('');
        $telInput2.val('');
        $periodSelect.val('');
        $messageTextarea2.val('');
        $privacyCheckbox2.prop('checked', false);
        $('#name-required-errormessage2').remove();
        $('#email-required-errormessage2').remove();
        $('#email-required-errormessage-down2').remove();
        $('#email-errormessage2').remove();
        $('#period-errormessage2').remove();
        $('#message-required-errormessage2').remove();
        $('#privacy-errormessage2').remove();
        $('.submit-error').remove();
        $emailInput2.css('margin-bottom', '16px');
    }

    $nameInput2.on('keydown', preventEnterSubmit2);
    $emailInput2.on('keydown', preventEnterSubmit2);
    $telInput2.on('keydown', preventEnterSubmit2);
    $messageTextarea2.on('keydown', preventEnterSubmit2);

    $form2.on('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); 
        }
    });
});

function successModal() {
    const appendSection = document.querySelector('#entry');
    const successModalContainer = document.createElement("div");
    successModalContainer.setAttribute("class", "submit-container submit-modal__bg");
    successModalContainer.setAttribute("id", "submit-success-modal");
    
    const successModal = document.createElement("div");
    successModal.setAttribute("class", "submit-modal");
    successModal.setAttribute("id", "submit-success");
    
    const successModalTitle = document.createElement("div");
    successModalTitle.setAttribute("class", "submit-modal__title");
    
    const successH3 = document.createElement("h3");
    successH3.textContent = "送信完了";
    
    const successCloseBtn = document.createElement("button");
    successCloseBtn.setAttribute("type", "button");
    successCloseBtn.setAttribute("name", "close");
    successCloseBtn.setAttribute("value", "閉じる");
    successCloseBtn.setAttribute("id", "submit-closebtn");
    
    for (let i = 0; i < 2; i++) {
        const span = document.createElement("span");
        span.setAttribute("class", "close-btn");
        successCloseBtn.appendChild(span);
    }
    
    successModalTitle.appendChild(successH3);
    successModalTitle.appendChild(successCloseBtn);
    
    const successImg = document.createElement("img");
    successImg.setAttribute("src", "assets/img/submitmark.png");
    successImg.setAttribute("alt", "Factor Xキャリアへのお問い合わせ・ご相談の送信完了画像");
    
    const successPTag = document.createElement("p");
    successPTag.innerHTML = "お問い合わせ・ご相談の受付を完了いたしました。<br>担当者よりご連絡を差し上げますので、しばらくお待ちくださいますようよろしくお願いいたします。";
    
    successModal.appendChild(successModalTitle);
    successModal.appendChild(successImg);
    successModal.appendChild(successPTag);
    
    successModalContainer.appendChild(successModal);
    appendSection.appendChild(successModalContainer);
    const $bodyFix = $('.body');
    $bodyFix.addClass('body-fixed');

    successCloseBtn.addEventListener('click', function() {
        successModalContainer.parentNode.removeChild(successModalContainer);
        document.body.classList.remove('body-fixed');
    });

    successModalContainer.addEventListener('click', function(event) {
        if (event.target === successModalContainer) {
            successModalContainer.parentNode.removeChild(successModalContainer);
            document.body.classList.remove('body-fixed');
        }
    });
}

function failureModal() {

    const appendSection = document.querySelector('#entry');
    const failureModalContainer = document.createElement("div");
    failureModalContainer.setAttribute("class", "submit-container submit-modal__bg");
    failureModalContainer.setAttribute("id", "submit-failure-modal");

    const failureModal = document.createElement("div");
    failureModal.setAttribute("class", "submit-modal");
    failureModal.setAttribute("id", "submit-failure");

    const failureModalTitle = document.createElement("div");
    failureModalTitle.setAttribute("class", "submit-modal__title");

    const failureH3 = document.createElement("h3");
    failureH3.textContent = "送信失敗";

    const failureCloseBtn = document.createElement("button");
    failureCloseBtn.setAttribute("type", "button");
    failureCloseBtn.setAttribute("name", "close");
    failureCloseBtn.setAttribute("value", "閉じる");
    failureCloseBtn.setAttribute("id", "submit-closebtn2");

    for (let i = 0; i < 2; i++) {
        const span = document.createElement("span");
        span.setAttribute("class", "close-btn");
        failureCloseBtn.appendChild(span);
    }

    failureModalTitle.appendChild(failureH3);
    failureModalTitle.appendChild(failureCloseBtn);

    const failureImg = document.createElement("img");
    failureImg.setAttribute("src", "assets/img/ngmark.png");
    failureImg.setAttribute("alt", "Factor Xキャリアへのお問い合わせ・ご相談の送信失敗画像");

    const failurePTag = document.createElement("p");
    failurePTag.innerHTML = "メッセージの送信に失敗しました。<br>大変お手数ですが、時間をおいてから再度お試しください。";

    failureModal.appendChild(failureModalTitle);
    failureModal.appendChild(failureImg);
    failureModal.appendChild(failurePTag);

    failureModalContainer.appendChild(failureModal);
    appendSection.appendChild(failureModalContainer);
    const $bodyFix = $('.body');
    $bodyFix.addClass('body-fixed');

    failureCloseBtn.addEventListener('click', function() {
        failureModalContainer.parentNode.removeChild(failureModalContainer);
        document.body.classList.remove('body-fixed');
    });

    failureModalContainer.addEventListener('click', function(event) {
        if (event.target === failureModalContainer) {
            failureModalContainer.parentNode.removeChild(failureModalContainer);
            document.body.classList.remove('body-fixed');
        }
    });
}