const naviBtn = document.querySelector('.navi-btn');
const naviBtnParts = document. querySelectorAll('.navi-btn__parts');
const navi = document.querySelector('.navi');
const naviOpen = document.querySelector('.navi--open');

naviBtn.addEventListener('click', function() {
    for(let i =0; i < naviBtnParts.length; i++ ) {
        naviBtnParts[i].classList.toggle('open');
    }
    navi.classList.toggle('navi--open');
})

window.addEventListener('scroll', function() {
    const entrySection = document.querySelector('#entry');
    const entryScrollbtn = document.querySelector('.scroll-btn-container');

    if (window.scrollY >= entrySection.offsetTop) {
        entryScrollbtn.style.display = 'none'; 
    } else {
        entryScrollbtn.style.display = 'block';
    }
  });

const pripoliModalBg = document.querySelector('.pripoli-container');
const pripoliModal = document.querySelector('.pripoli-modal');
const pripoliBtn = document.querySelector('#contact-pripoli');
const pripoliBtn2 = document.querySelector('#entry-pripoli');
const bodyFix = document.querySelector('.body');
const pripoliClosebtn = document.querySelector('#pripoli-closebtn');
const footerPripoli = document.querySelector('#pripoli');
const pripoliscroll = document.querySelector('.pripoli-modal__contents__detail');


// スクロールの始めの位置
let scrollPosition = 0;

// モーダルウィンドウを開く関数
function openModal() {
    // モーダルウィンドウを開く前のスクロール位置を記録
    scrollPosition = pripoliscroll.scrollTop;
    // その他のモーダルウィンドウの開く処理を実装
    pripoliModalBg.classList.add('pripoli-modal__bg');
    pripoliModal.classList.add('pripoli-modal--open');
    pripoliModal.classList.remove('pripoli-modal--close');
    bodyFix.classList.add('body-fixed');
}

// モーダルウィンドウを閉じる関数
function closeModal() {
    // 何かしらの方法でモーダルウィンドウを閉じる処理を実行
    pripoliModalBg.classList.remove('pripoli-modal__bg');
    pripoliModal.classList.remove('pripoli-modal--open');
    pripoliModal.classList.add('pripoli-modal--close');
    bodyFix.classList.remove('body-fixed');
}

// モーダルウィンドウを開く際に、ウィンドウのスクロール位置を初期位置に戻す関数
function resetScrollPosition() {
    // モーダルウィンドウのスクロール位置をリセット
    pripoliscroll.scrollTop = 0;
}

// モーダルウィンドウを開くボタンにイベントリスナーを設定
pripoliBtn.addEventListener('click', function () {
    openModal();
    resetScrollPosition();
});

pripoliBtn2.addEventListener('click', function () {
    openModal();
    resetScrollPosition();
});

footerPripoli.addEventListener('click', function () {
    openModal();
    resetScrollPosition();
});

// モーダルウィンドウを閉じるボタンにイベントリスナーを設定
pripoliClosebtn.addEventListener('click', function() {
    closeModal();
    resetScrollPosition();
});

// モーダルウィンドウの背景をクリックした際のイベントリスナーを設定
pripoliModalBg.addEventListener('click', function(event) {
    if(event.target.closest('#focus-modal-container') === null) {
        closeModal();
        resetScrollPosition();
    }
});

const companyModalBg = document.querySelector('.company-container');
const companyModal = document.querySelector('.company-modal');
const companyBtn = document.querySelector('#company');
// const bodyFix = document.querySelector('.body');
const companyClosebtn = document.querySelector('#company-closebtn');
const companyscroll = document.querySelector('.company-modal__contents');


// スクロールの始めの位置
// let scrollPosition = 0;

// モーダルウィンドウを開く関数
function openModal() {
    // モーダルウィンドウを開く前のスクロール位置を記録
    scrollPosition = companyscroll.scrollTop;
    // その他のモーダルウィンドウの開く処理を実装
    companyModalBg.classList.add('company-modal__bg');
    companyModal.classList.add('company-modal--open');
    companyModal.classList.remove('company-modal--close');
    bodyFix.classList.add('body-fixed');
}

// モーダルウィンドウを閉じる関数
function closeModal() {
    // 何かしらの方法でモーダルウィンドウを閉じる処理を実行
    companyModalBg.classList.remove('company-modal__bg');
    companyModal.classList.remove('company-modal--open');
    companyModal.classList.add('company-modal--close');
    bodyFix.classList.remove('body-fixed');
}

// モーダルウィンドウを開く際に、ウィンドウのスクロール位置を初期位置に戻す関数
function resetScrollPosition() {
    // モーダルウィンドウのスクロール位置をリセット
    companyscroll.scrollTop = 0;
}

// モーダルウィンドウを開くボタンにイベントリスナーを設定
companyBtn.addEventListener('click', function () {
    openModal();
    resetScrollPosition();
});

// モーダルウィンドウを閉じるボタンにイベントリスナーを設定
companyClosebtn.addEventListener('click', function() {
    closeModal();
    resetScrollPosition();
});

// モーダルウィンドウの背景をクリックした際のイベントリスナーを設定
companyModalBg.addEventListener('click', function(event) {
    if(event.target.closest('#focus-modal-container') === null) {
        closeModal();
        resetScrollPosition();
    }
});


const entryBtn = document.querySelector('#entrybtn');
const entryBtn2 = document.querySelector('#entrybtn2');
const entryTab = document.querySelector('#entry-form');
const contactTab = document.querySelector('#contact-form');
const formContainer = document.querySelector('.form-container');
const contactBtn = document.querySelector('#contactbtn');
const contactBtn2 = document.querySelector('#contactbtn2');
const scrollBtn = document.querySelector('#scroll-btn');

const entry = document.querySelector('#entry-tab');
const contact2 = document.querySelector('#contact-tab2');

entryBtn.addEventListener('click', function() {
    if(formContainer.classList.contains('contact-form--open')) {
        entryTab.classList.add('entry-form--open');
        entryTab.classList.remove('entry-form');
        contactTab.classList.remove('contact-form--open');
        contactTab.classList.add('contact-form');
    }
});

entryBtn2.addEventListener('click', function() {
    if(formContainer.classList.contains('contact-form--open')) {
        entryTab.classList.add('entry-form--open');
        entryTab.classList.remove('entry-form');
        contactTab.classList.remove('contact-form--open');
        contactTab.classList.add('contact-form');
    }
});

contactBtn.addEventListener('click', function() {
    if(formContainer.classList.contains('entry-form--open')) {
        entryTab.classList.add('entry-form');
        entryTab.classList.remove('entry-form--open');
        contactTab.classList.remove('contact-form');
        contactTab.classList.add('contact-form--open');
    } else {
        entryTab.classList.add('entry-form');
        entryTab.classList.remove('entry-form--open');
        contactTab.classList.remove('contact-form');
        contactTab.classList.add('contact-form--open');
    }
});

contactBtn2.addEventListener('click', function() {
    if(formContainer.classList.contains('entry-form--open')) {
        entryTab.classList.add('entry-form');
        entryTab.classList.remove('entry-form--open');
        contactTab.classList.remove('contact-form');
        contactTab.classList.add('contact-form--open');
    } else {
        entryTab.classList.add('entry-form');
        entryTab.classList.remove('entry-form--open');
        contactTab.classList.remove('contact-form');
        contactTab.classList.add('contact-form--open');
    }
});

scrollBtn.addEventListener('click', function() {
    if(formContainer.classList.contains('contact-form--open')) {
        entryTab.classList.add('entry-form--open');
        entryTab.classList.remove('entry-form');
        contactTab.classList.remove('contact-form--open');
        contactTab.classList.add('contact-form');
    }
});

entry.addEventListener('click', function() {
    entryTab.classList.add('entry-form--open');
    entryTab.classList.remove('entry-form');
    contactTab.classList.remove('contact-form--open');
    contactTab.classList.add('contact-form');
});

contact2.addEventListener('click', function() {
    entryTab.classList.add('entry-form');
    entryTab.classList.remove('entry-form--open');
    contactTab.classList.remove('contact-form');
    contactTab.classList.add('contact-form--open');
});

const submitBtns = document.querySelectorAll(".form-container__section__detail__submit");
const submitModal = document.querySelector("#submit-modal");

submitBtns.forEach(submitBtn => {
    submitBtn.addEventListener('click', function() {
        submitModal.classList.add('submit-modal--open');
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const submitBtns = document.querySelectorAll(".form-container__section__detail__submit");
//     const privacyCheckbox = document.querySelector(".form-container__section__detail__agree");

//     submitBtns.forEach(function(submitBtn) {
//         submitBtn.addEventListener('click', function(event) {
//             if (!privacyCheckbox.checked) {
//                 event.preventDefault(); // 送信を中止
//                 alert("プライバシーポリシーの同意が必要です。");
//             }
//         });
//     });
// });

// $(function () {
//     const $goentry = $('.scroll-btn-container');

//     $(window).on('load', function() {
//         if ($(window).scrollTop() > 500) {
//             $goentry.addClass('scroll-btn-container--show');
//         } else {
//             $goentry.removeClass('scroll-btn-container--show');
//         }
//     });

//     $(window).scroll(function () {
//         let scrollTop = $(this).scrollTop();

//         if (scrollTop > 500) {
//             $goentry.addClass('scroll-btn-container--show');
//         } else {
//             $goentry.removeClass('scroll-btn-container--show');
//         }
//     });
// });

const nameInput = document.getElementById('contact-name'); 
const emailInput = document.getElementById('contact-email'); 
const telInput = document.getElementById('contact-tel');
const messageTextarea = document.getElementById('contact-contents'); 

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
telInput.addEventListener('input', validateTel);
messageTextarea.addEventListener('input', validateMessage);

function validateName() {
    const nameRegex = /^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\uFF21-\uFF5A\uFF41-\uFF5A]+$/;
    const isNameValid = nameRegex.test(nameInput.value); 
    let nameErrorMessage = document.getElementById('name-errormessage');
    if (!nameErrorMessage) {
        nameErrorMessage = createErrorMessage('name-errormessage', nameInput);
    }
    if (!isNameValid) {
        displayError(nameErrorMessage, "ひらがな、カタカナ、漢字、または英字（全角）で入力してください。");
        nameInput.value = ''; 
    } else {
        hideError(nameErrorMessage); 
    }
}

function validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    const isEmailValid = emailRegex.test(emailInput.value); 
    let emailErrorMessage = document.getElementById('email-errormessage');
    if (!emailErrorMessage) {
        emailErrorMessage = document.createElement('p');
        emailErrorMessage.id = 'email-errormessage';
        emailErrorMessage.style.color = '#D21744';
        emailErrorMessage.style.fontSize = '0.75rem'; 
        emailErrorMessage.style.margin = '8px 0 16px'; 
        emailInput.style.marginBottom = '0';
        emailInput.parentNode.insertBefore(emailErrorMessage, emailInput.nextSibling); 
    }
    if (!isEmailValid) {
        displayError(emailErrorMessage, "正しいメールアドレスを入力してください。");
    } else {
        hideError(emailErrorMessage); 
    }
}

function validateTel() {
    const telRegex = /^\d{10,11}$/;
    const isTelValid = telRegex.test(telInput.value);
    let telErrorMessage = document.getElementById('tel-errormessage');
    if (!telErrorMessage) {
        telErrorMessage = createErrorMessage('tel-errormessage', telInput);
    }
    if (!isTelValid) {
        displayError(telErrorMessage, "正しい電話番号を入力してください。");
    } else {
        hideError(telErrorMessage); 
    }
}

function validateMessage() {
    const isMessageValid = messageTextarea.value.length <= 1000;
    let messageErrorMessage = document.getElementById('message-errormessage');
    if (!messageErrorMessage) {
        messageErrorMessage = createErrorMessage('message-errormessage', messageTextarea);
    }
    if (!isMessageValid) {
        displayError(messageErrorMessage, "1000文字以内で入力してください。");
    } else {
        hideError(messageErrorMessage); 
    }
}

function createErrorMessage(id, inputElement) {
    const errorMessage = document.createElement('p');
    errorMessage.id = id;
    errorMessage.style.color = '#D21744';
    errorMessage.style.fontSize = '0.75rem'; 
    errorMessage.style.margin = '8px 0 0'; 
    inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
    return errorMessage;
}

function displayError(errorMessageElement, message) {
    errorMessageElement.textContent = message;
}

function hideError(errorMessageElement) {
    errorMessageElement.textContent = '';
}

const nameInput2 = document.getElementById('contact-name2'); 
const emailInput2 = document.getElementById('contact-email2'); 
const telInput2 = document.getElementById('contact-tel2');
const messageTextarea2 = document.getElementById('contact-contents2'); 

nameInput2.addEventListener('input', validateName2);
emailInput2.addEventListener('input', validateEmail2);
telInput2.addEventListener('input', validateTel2);
messageTextarea2.addEventListener('input', validateMessage2);

function validateName2() {
    const nameRegex = /^[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\uFF21-\uFF5A\uFF41-\uFF5A]+$/;
    const isNameValid = nameRegex.test(nameInput2.value); 
    let nameErrorMessage = document.getElementById('name-errormessage2');
    if (!nameErrorMessage) {
        nameErrorMessage = createErrorMessage('name-errormessage2', nameInput2);
    }
    if (!isNameValid) {
        displayError(nameErrorMessage, "ひらがな、カタカナ、漢字、または英字（全角）で入力してください。");
        nameInput2.value = ''; 
    } else {
        hideError(nameErrorMessage); 
    }
}

function validateEmail2() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    const isEmailValid = emailRegex.test(emailInput2.value); 
    let emailErrorMessage = document.getElementById('email-errormessage2');
    if (!emailErrorMessage) {
        emailErrorMessage = document.createElement('p');
        emailErrorMessage.id = 'email-errormessage2';
        emailErrorMessage.style.color = '#D21744';
        emailErrorMessage.style.fontSize = '0.75rem'; 
        emailErrorMessage.style.margin = '8px 0 16px'; 
        emailInput2.style.marginBottom = '0';
        emailInput2.parentNode.insertBefore(emailErrorMessage, emailInput2.nextSibling); 
    }
    if (!isEmailValid) {
        displayError(emailErrorMessage, "正しいメールアドレスを入力してください。");
    } else {
        hideError(emailErrorMessage); 
    }
}

function validateTel2() {
    const telRegex = /^\d{10,11}$/;
    const isTelValid = telRegex.test(telInput2.value);
    let telErrorMessage = document.getElementById('tel-errormessage2');
    if (!telErrorMessage) {
        telErrorMessage = createErrorMessage('tel-errormessage2', telInput2);
    }
    if (!isTelValid) {
        displayError(telErrorMessage, "正しい電話番号を入力してください。");
    } else {
        hideError(telErrorMessage); 
    }
}

function validateMessage2() {
    const isMessageValid = messageTextarea2.value.length <= 1000;
    let messageErrorMessage = document.getElementById('message-errormessage2');
    if (!messageErrorMessage) {
        messageErrorMessage = createErrorMessage('message-errormessage2', messageTextarea2);
    }
    if (!isMessageValid) {
        displayError(messageErrorMessage, "1000文字以内で入力してください。");
    } else {
        hideError(messageErrorMessage); 
    }
}

function createErrorMessage(id, inputElement) {
    const errorMessage = document.createElement('p');
    errorMessage.id = id;
    errorMessage.style.color = '#D21744';
    errorMessage.style.fontSize = '0.75rem'; 
    errorMessage.style.margin = '8px 0 0'; 
    inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
    return errorMessage;
}

function displayError(errorMessageElement, message) {
    errorMessageElement.textContent = message;
}

function hideError(errorMessageElement) {
    errorMessageElement.textContent = '';
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form__section');
    const submitModalBg = document.querySelector('#submit-success-modal');
    const submitModalBg2 = document.querySelector('#submit-failure-modal');
    const submitSuccess = document.querySelector('#submit-success');
    const submitFailure = document.querySelector('#submit-failure');
    const bodyFix = document.querySelector('.body');
    const submitClosebtn = document.querySelector('#submit-closebtn');
    const submitClosebtn2 = document.querySelector('#submit-closebtn2');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(this);

        try {
            const response = await fetch('http://localhost:8888/factorxcareer/php/output.php', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                successModal();
            } else {
                failureModal();
            }
        } catch (error) {
            console.error('Error:', error);
            failureModal();
        }
    });

    function successModal() {
        submitModalBg.classList.add('submit-modal__bg');
        submitSuccess.classList.add('submit-modal--open')
        submitSuccess.classList.remove('submit-modal--close');
        bodyFix.classList.add('body-fixed');

        submitClosebtn.addEventListener('click', function() {
            submitModalBg.classList.remove('submit-modal__bg');
            submitSuccess.classList.remove('submit-modal--open')
            submitSuccess.classList.add('submit-modal--close');
            bodyFix.classList.remove('body-fixed');
        });

        submitModalBg.addEventListener('click', function(event) {
            if (!event.target.closest('.submit-modal')) {
                submitModalBg.classList.remove('submit-modal__bg');
                submitSuccess.classList.remove('submit-modal--open');
                submitSuccess.classList.add('submit-modal--close');
                bodyFix.classList.remove('body-fixed');
            }
        });
    }

    function failureModal() {
        submitModalBg2.classList.add('submit-modal__bg');
        submitFailure.classList.add('submit-modal--open')
        submitFailure.classList.remove('submit-modal--close');
        bodyFix.classList.add('body-fixed');
    
        submitClosebtn2.addEventListener('click', function() {
            submitModalBg2.classList.remove('submit-modal__bg');
            submitFailure.classList.remove('submit-modal--open')
            submitFailure.classList.add('submit-modal--close');
            bodyFix.classList.remove('body-fixed');
        });

        submitModalBg2.addEventListener('click', function(event) {
            if (!event.target.closest('.submit-modal')) {
                submitModalBg2.classList.remove('submit-modal__bg');
                submitFailure.classList.remove('submit-modal--open');
                submitFailure.classList.add('submit-modal--close');
                bodyFix.classList.remove('body-fixed');
            }
        });
    }
});


