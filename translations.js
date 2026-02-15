const translations = {
    en: {
        meta_title: "Face Mosaic Pro - AI Video Privacy",
        nav_home: "Home",
        nav_privacy: "Privacy",
        nav_terms: "Terms",
        nav_support: "Support",
        hero_title: "Protect Identity in Videos with AI",
        hero_desc: "Automatically detect faces and apply mosaic, blur, or stickers. Processing is done entirely on-device for maximum privacy.",
        download_ios: "Download on App Store",
        download_android: "Get it on Google Play",
        feature_1_title: "AI Face Detection",
        feature_1_desc: "High-precision face detection tracks movement automatically.",
        feature_2_title: "On-Device Privacy",
        feature_2_desc: "Your videos never leave your phone. 100% secure.",
        feature_3_title: "Creative Effects",
        feature_3_desc: "Choose from Pixelate, Blur, Blackout, or Stickers.",
        privacy_title: "Privacy Policy",
        privacy_content_1: "At Face Mosaic Pro, we prioritize your privacy above all else.",
        privacy_content_2: "1. No Data Collection: We do not collect, store, or transmit your video data to any server. All processing happens locally on your device.",
        privacy_content_3: "2. Face Data: Face detection is performed using on-device APIs and is transient. No face data is stored.",
        terms_title: "Terms of Service",
        terms_content_1: "By using Face Mosaic Pro, you agree to these terms.",
        terms_content_2: "1. License: We grant you a revocable, non-exclusive license to use the app for personal use.",
        terms_content_3: "2. Prohibited Use: You may not use this app for illegal activities.",
        support_title: "Support",
        support_desc: "Have questions or found a bug? Reach out to us.",
        contact_btn: "Contact Us via Email",
        footer_rights: "© 2024 Face Mosaic Pro. All rights reserved."
    },
    ja: {
        meta_title: "Face Mosaic Pro - AI動画プライバシー保護",
        nav_home: "ホーム",
        nav_privacy: "プライバシー",
        nav_terms: "利用規約",
        nav_support: "サポート",
        hero_title: "AIで動画の肖像権を守る",
        hero_desc: "顔を自動検出し、モザイク、ぼかし、スタンプを適用。すべての処理は端末内で行われるため、プライバシーは完全に守られます。",
        download_ios: "App Storeでダウンロード",
        download_android: "Google Playで手に入れる",
        feature_1_title: "AI顔検出",
        feature_1_desc: "高精度なAIが動きに合わせて顔を自動追尾します。",
        feature_2_title: "完全ローカル処理",
        feature_2_desc: "動画が外部サーバーに送信されることはありません。",
        feature_3_title: "多彩なエフェクト",
        feature_3_desc: "ピクセル、ぼかし、黒塗り、スタンプから選択可能。",
        privacy_title: "プライバシーポリシー",
        privacy_content_1: "Face Mosaic Proでは、お客様のプライバシーを最優先しています。",
        privacy_content_2: "1. データ収集なし: 動画データの収集、保存、送信は一切行いません。すべて端末内で処理されます。",
        privacy_content_3: "2. 顔データ: 顔検出はオンデバイスAPIを使用し、一時的なものです。顔データは保存されません。",
        terms_title: "利用規約",
        terms_content_1: "アプリを使用することで、以下の規約に同意したものとみなされます。",
        terms_content_2: "1. ライセンス: 個人的な使用に限り、本アプリの使用を許諾します。",
        terms_content_3: "2. 禁止事項: 違法行為のために本アプリを使用することはできません。",
        support_title: "サポート",
        support_desc: "ご質問やバグの報告はこちらからお問い合わせください。",
        contact_btn: "メールで問い合わせる",
        footer_rights: "© 2024 Face Mosaic Pro. All rights reserved."
    },
    es: {
        meta_title: "Face Mosaic Pro - Privacidad de Video AI",
        nav_home: "Inicio",
        nav_privacy: "Privacidad",
        nav_terms: "Términos",
        nav_support: "Soporte",
        hero_title: "Proteja la identidad en videos con IA",
        hero_desc: "Detecta rostros automáticamente y aplica mosaico o desenfoque. El procesamiento se realiza completamente en el dispositivo.",
        download_ios: "Descargar en App Store",
        download_android: "Consíguelo en Google Play",
        feature_1_title: "Detección de Rostros IA",
        feature_1_desc: "Detección de alta precisión que sigue el movimiento automáticamente.",
        feature_2_title: "Privacidad en el Dispositivo",
        feature_2_desc: "Tus videos nunca salen de tu teléfono. 100% seguro.",
        feature_3_title: "Efectos Creativos",
        feature_3_desc: "Elige entre Pixelar, Desenfocar, Censura o Pegatinas.",
        privacy_title: "Política de Privacidad",
        privacy_content_1: "En Face Mosaic Pro, priorizamos su privacidad.",
        privacy_content_2: "1. Sin recopilación de datos: No recopilamos ni transmitimos sus videos. Todo ocurre localmente.",
        privacy_content_3: "2. Datos faciales: La detección es transitoria y no se almacena ningún dato facial.",
        terms_title: "Términos de Servicio",
        terms_content_1: "Al usar Face Mosaic Pro, acepta estos términos.",
        terms_content_2: "1. Licencia: Le otorgamos una licencia para uso personal.",
        terms_content_3: "2. Uso prohibido: No puede usar esta aplicación para actividades ilegales.",
        support_title: "Soporte",
        support_desc: "¿Tiene preguntas? Contáctenos.",
        contact_btn: "Contáctenos por correo",
        footer_rights: "© 2024 Face Mosaic Pro. Todos los derechos reservados."
    },
    // 他の言語 (zh, hi, ar, pt, ru, ko, fr) も同様の構造で追加可能
    // 簡略化のため、主要言語以外は英語にフォールバックさせます
};

const supportedLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. URLパラメータから言語を取得
    const urlParams = new URLSearchParams(window.location.search);
    let currentLang = urlParams.get('lang') || navigator.language.slice(0, 2);
    
    // サポートされていない言語なら英語にする
    if (!translations[currentLang] && !['en', 'ja', 'es'].includes(currentLang)) {
        // デモ用として、未定義言語は英語を表示しつつ、言語コードだけ維持する（またはenにする）
        // ここでは簡易的に翻訳データがあるものだけ処理し、なければ英語
        if (!translations[currentLang]) currentLang = 'en'; 
    }
    // 上記のオブジェクトにない言語コードが来た場合のために英語フォールバック
    const langData = translations[currentLang] || translations['en'];

    // 2. テキストの置換
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) {
            el.textContent = langData[key];
        }
    });

    // 3. RTL (右書き) 対応
    if (['ar', 'he'].includes(currentLang)) {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.classList.add('rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.classList.remove('rtl');
    }

    // 4. 言語セレクターの生成
    const selector = document.getElementById('language-selector');
    if (selector) {
        supportedLanguages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang.code;
            option.textContent = `${lang.flag} ${lang.name}`;
            if (lang.code === currentLang) option.selected = true;
            selector.appendChild(option);
        });

        selector.addEventListener('change', (e) => {
            const newLang = e.target.value;
            const url = new URL(window.location);
            url.searchParams.set('lang', newLang);
            window.location.href = url.toString();
        });
    }

    // 5. リンクの維持 (他のページへの遷移時に lang パラメータを引き継ぐ)
    document.querySelectorAll('a').forEach(link => {
        // 外部リンクやアンカーリンクは除外
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetUrl = new URL(href, window.location.origin);
                targetUrl.searchParams.set('lang', currentLang);
                window.location.href = targetUrl.toString();
            });
        }
    });
});
