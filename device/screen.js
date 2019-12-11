var glbSep, glbPair, glbFlashVersion, glbOnError, glbOutputMode;

glbSep = '|';
glbPair = '=';
glbFlashVersion = "";
glbOnError = "err"; /* This sets output on error <sp>, null, err or similar. */
glbOutputMode = "ENHANCED";

/* Fingerprint user-agent */
function fingerprint_useragent() {
    var strUserAgent, strOpera, strIE, strMOZ, strTmp, strOut;
    try {
        strUserAgent = navigator.userAgent.toLowerCase();
        strOpera = strUserAgent.indexOf("opera") >= 0;
        strIE = strUserAgent.indexOf("msie") >= 0 && !strOpera;
        strMOZ = strUserAgent.indexOf("mozilla") && !strIE && !strOpera;

        if (glbOutputMode === "RSA") {
            strTmp = strUserAgent + glbSep + navigator.appVersion + glbSep + navigator.platform;
            if (strIE) {
                strTmp += glbSep + navigator.appMinorVersion + glbSep + navigator.cpuClass + glbSep + navigator.browserLanguage + glbSep + ScriptEngineBuildVersion();
            } else if (strMOZ) {
                strTmp += glbSep + navigator.language;
            }
        } else {
            strTmp = strUserAgent + glbSep + navigator.platform;
            if (strIE) {
                strTmp += glbSep + navigator.cpuClass + glbSep + navigator.browserLanguage + glbSep + ScriptEngineBuildVersion();
            } else if (strMOZ) {
                strTmp += glbSep + navigator.language;
            }
        }
        strOut = strTmp;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

/* Fingerprint OS */
function fingerprint_os() {
    var strOS, strUserAgent, strOut;
    try {
        strUserAgent = navigator.userAgent.toLowerCase();
        if (strUserAgent.indexOf("windows nt 8") !== -1) {
            strOS = "Windows 8";
        } else if (strUserAgent.indexOf("windows nt 7.0") !== -1) {
            strOS = "Windows 7";
        } else if (strUserAgent.indexOf("windows nt 6.2") !== -1) {
            strOS = "Windows 7";
        } else if (strUserAgent.indexOf("windows nt 6.1") !== -1) {
            strOS = "Windows 7";
        } else if (strUserAgent.indexOf("windows nt 6.0") !== -1) {
            strOS = "Windows Vista/Windows Server 2008";
        } else if (strUserAgent.indexOf("windows nt 5.2") !== -1) {
            strOS = "Windows XP x64/Windows Server 2003";
        } else if (strUserAgent.indexOf("windows nt 5.1") !== -1) {
            strOS = "Windows XP";
        } else if (strUserAgent.indexOf("windows xp") !== -1) {
            strOS = "Windows XP";
        } else if (strUserAgent.indexOf("windows 2000") !== -1) {
            strOS = "Windows 2000";
        } else if (strUserAgent.indexOf("windows nt 5.0") !== -1) {
            strOS = "Windows 2000";
        } else if (strUserAgent.indexOf("windows nt 4.0") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("windows nt") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("winnt4.0") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("winnt") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("windows me") !== -1) {
            strOS = "Windows ME";
        } else if (strUserAgent.indexOf("win 9x 4.90") !== -1) {
            strOS = "Windows ME";
        } else if (strUserAgent.indexOf("windows 98") !== -1) {
            strOS = "Windows 98";
        } else if (strUserAgent.indexOf("win98") !== -1) {
            strOS = "Windows 98";
        } else if (strUserAgent.indexOf("windows 95") !== -1) {
            strOS = "Windows 95";
        } else if (strUserAgent.indexOf("windows_95") !== -1) {
            strOS = "Windows 95";
        } else if (strUserAgent.indexOf("win95") !== -1) {
            strOS = "Windows 95";
        } else if (strUserAgent.indexOf("ce") !== -1) {
            strOS = "Windows CE";
        } else if (strUserAgent.indexOf("win16") !== -1) {
            strOS = "Windows 3.11";
        } else if (strUserAgent.indexOf("iemobile") !== -1) {
            strOS = "Windows Mobile";
        } else if (strUserAgent.indexOf("wm5 pie") !== -1) {
            strOS = "Windows Mobile";
        } else if (strUserAgent.indexOf("windows") !== -1) {
            strOS = "Windows (Unknown Version)";
        } else if (strUserAgent.indexOf("openbsd") !== -1) {
            strOS = "Open BSD";
        } else if (strUserAgent.indexOf("sunos") !== -1) {
            strOS = "Sun OS";
        } else if (strUserAgent.indexOf("ubuntu") !== -1) {
            strOS = "Ubuntu";
        } else if (strUserAgent.indexOf("ipad") !== -1) {
            strOS = "iOS (iPad)";
        } else if (strUserAgent.indexOf("ipod") !== -1) {
            strOS = "iOS (iTouch)";
        } else if (strUserAgent.indexOf("iphone") !== -1) {
            strOS = "iOS (iPhone)";
        } else if (strUserAgent.indexOf("mac os x beta") !== -1) {
            strOS = "Mac OSX Beta (Kodiak)";
        } else if (strUserAgent.indexOf("mac os x 10.0") !== -1) {
            strOS = "Mac OSX Cheetah";
        } else if (strUserAgent.indexOf("mac os x 10.1") !== -1) {
            strOS = "Mac OSX Puma";
        } else if (strUserAgent.indexOf("mac os x 10.2") !== -1) {
            strOS = "Mac OSX Jaguar";
        } else if (strUserAgent.indexOf("mac os x 10.3") !== -1) {
            strOS = "Mac OSX Panther";
        } else if (strUserAgent.indexOf("mac os x 10.4") !== -1) {
            strOS = "Mac OSX Tiger";
        } else if (strUserAgent.indexOf("mac os x 10.5") !== -1) {
            strOS = "Mac OSX Leopard";
        } else if (strUserAgent.indexOf("mac os x 10.6") !== -1) {
            strOS = "Mac OSX Snow Leopard";
        } else if (strUserAgent.indexOf("mac os x 10.7") !== -1) {
            strOS = "Mac OSX Lion";
        } else if (strUserAgent.indexOf("mac os x") !== -1) {
            strOS = "Mac OSX (Version Unknown)";
        } else if (strUserAgent.indexOf("mac_68000") !== -1) {
            strOS = "Mac OS Classic (68000)";
        } else if (strUserAgent.indexOf("68K") !== -1) {
            strOS = "Mac OS Classic (68000)";
        } else if (strUserAgent.indexOf("mac_powerpc") !== -1) {
            strOS = "Mac OS Classic (PowerPC)";
        } else if (strUserAgent.indexOf("ppc mac") !== -1) {
            strOS = "Mac OS Classic (PowerPC)";
        } else if (strUserAgent.indexOf("macintosh") !== -1) {
            strOS = "Mac OS Classic";
        } else if (strUserAgent.indexOf("googletv") !== -1) {
            strOS = "Android (GoogleTV)";
        } else if (strUserAgent.indexOf("xoom") !== -1) {
            strOS = "Android (Xoom)";
        } else if (strUserAgent.indexOf("htc_flyer") !== -1) {
            strOS = "Android (HTC Flyer)";
        } else if (strUserAgent.indexOf("android") !== -1) {
            strOS = "Android";
        } else if (strUserAgent.indexOf("symbian") !== -1) {
            strOS = "Symbian";
        } else if (strUserAgent.indexOf("series60") !== -1) {
            strOS = "Symbian (Series 60)";
        } else if (strUserAgent.indexOf("series70") !== -1) {
            strOS = "Symbian (Series 70)";
        } else if (strUserAgent.indexOf("series80") !== -1) {
            strOS = "Symbian (Series 80)";
        } else if (strUserAgent.indexOf("series90") !== -1) {
            strOS = "Symbian (Series 90)";
        } else if (strUserAgent.indexOf("x11") !== -1) {
            strOS = "UNIX";
        } else if (strUserAgent.indexOf("nix") !== -1) {
            strOS = "UNIX";
        } else if (strUserAgent.indexOf("linux") !== -1) {
            strOS = "Linux";
        } else if (strUserAgent.indexOf("qnx") !== -1) {
            strOS = "QNX";
        } else if (strUserAgent.indexOf("os/2") !== -1) {
            strOS = "IBM OS/2";
        } else if (strUserAgent.indexOf("beos") !== -1) {
            strOS = "BeOS";
        } else if (strUserAgent.indexOf("blackberry95") !== -1) {
            strOS = "Blackberry (Storm 1/2)";
        } else if (strUserAgent.indexOf("blackberry97") !== -1) {
            strOS = "Blackberry (Bold)";
        } else if (strUserAgent.indexOf("blackberry96") !== -1) {
            strOS = "Blackberry (Tour)";
        } else if (strUserAgent.indexOf("blackberry89") !== -1) {
            strOS = "Blackberry (Curve 2)";
        } else if (strUserAgent.indexOf("blackberry98") !== -1) {
            strOS = "Blackberry (Torch)";
        } else if (strUserAgent.indexOf("playbook") !== -1) {
            strOS = "Blackberry (Playbook)";
        } else if (strUserAgent.indexOf("wnd.rim") !== -1) {
            strOS = "Blackberry (IE/FF Emulator)";
        } else if (strUserAgent.indexOf("blackberry") !== -1) {
            strOS = "Blackberry";
        } else if (strUserAgent.indexOf("palm") !== -1) {
            strOS = "Palm OS";
        } else if (strUserAgent.indexOf("webos") !== -1) {
            strOS = "WebOS";
        } else if (strUserAgent.indexOf("hpwos") !== -1) {
            strOS = "WebOS (HP)";
        } else if (strUserAgent.indexOf("blazer") !== -1) {
            strOS = "Palm OS (Blazer)";
        } else if (strUserAgent.indexOf("xiino") !== -1) {
            strOS = "Palm OS (Xiino)";
        } else if (strUserAgent.indexOf("kindle") !== -1) {
            strOS = "Kindle";
        } else if (strUserAgent.indexOf("wii") !== -1) {
            strOS = "Nintendo (Wii)";
        } else if (strUserAgent.indexOf("nintendo ds") !== -1) {
            strOS = "Nintendo (DS)";
        } else if (strUserAgent.indexOf("playstation 3") !== -1) {
            strOS = "Sony (Playstation Console)";
        } else if (strUserAgent.indexOf("playstation portable") !== -1) {
            strOS = "Sony (Playstation Portable)";
        } else if (strUserAgent.indexOf("webtv") !== -1) {
            strOS = "MSN TV (WebTV)";
        } else if (strUserAgent.indexOf("inferno") !== -1) {
            strOS = "Inferno";
        } else {
            strOS = "Unknown";
        }
        strOut = strOS;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

/* Fingerprint Browser */
function fingerprint_browser() {
    var strUserAgent, numVersion, strBrowser, strOut;
    try {
        strUserAgent = navigator.userAgent.toLowerCase();
        if (/msie (\d+\.\d+);/.test(strUserAgent)) { //test for MSIE x.x;
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            if (strUserAgent.indexOf("trident/6") > -1) {
                numVersion = 10;
            }
            if (strUserAgent.indexOf("trident/5") > -1) {
                numVersion = 9;
            }
            if (strUserAgent.indexOf("trident/4") > -1) {
                numVersion = 8;
            }
            strBrowser = "Internet Explorer " + numVersion;
        } else if (/firefox[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Firefox " + numVersion;
        } else if (/opera[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Opera/x.x or Opera x.x (ignoring remaining decimal places);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Opera " + numVersion;
        } else if (/chrome[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Chrome/x.x or Chrome x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Chrome " + numVersion;
        } else if (/version[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Version/x.x or Version x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Safari " + numVersion;
        } else if (/rv[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for rv/x.x or rv x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Mozilla " + numVersion;
        } else if (/mozilla[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Mozilla/x.x or Mozilla x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Mozilla " + numVersion;
        } else if (/binget[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for BinGet/x.x or BinGet x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (BinGet) " + numVersion;
        } else if (/curl[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Curl/x.x or Curl x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (cURL) " + numVersion;
        } else if (/java[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Java/x.x or Java x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Java) " + numVersion;
        } else if (/libwww-perl[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for libwww-perl/x.x or libwww-perl x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (libwww-perl) " + numVersion;
        } else if (/microsoft url control -[\s](\d+\.\d+)/.test(strUserAgent)) { //test for Microsoft URL Control - x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Microsoft URL Control) " + numVersion;
        } else if (/peach[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Peach/x.x or Peach x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Peach) " + numVersion;
        } else if (/php[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for PHP/x.x or PHP x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (PHP) " + numVersion;
        } else if (/pxyscand[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for pxyscand/x.x or pxyscand x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (pxyscand) " + numVersion;
        } else if (/pycurl[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for pycurl/x.x or pycurl x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (PycURL) " + numVersion;
        } else if (/python-urllib[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for python-urllib/x.x or python-urllib x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Python URLlib) " + numVersion;
        } else if (/appengine-google/.test(strUserAgent)) { //test for AppEngine-Google;
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Cloud (Google AppEngine) " + numVersion;
        } else {
            strBrowser = "Unknown";
        }
        strOut = strBrowser;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

/* Fingerprint OS bits */
function fingerprint_bt() {
    var strUserAgent, strOpera, strIE, strMOZ, strTmp, strPlatform, strOSBits, strOut;
    try {
        strUserAgent = navigator.userAgent.toLowerCase();
        strOpera = strUserAgent.indexOf("opera") >= 0;
        strIE = strUserAgent.indexOf("msie") >= 0 && !strOpera;
        strMOZ = strUserAgent.indexOf("mozilla") && !strIE && !strOpera;
        strTmp = strUserAgent + glbSep + navigator.platform;
        if (strIE) {
            strTmp += glbSep + navigator.cpuClass;
        }
        strPlatform = strTmp.toLowerCase();
        if (strPlatform.indexOf("x64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("wow64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("win64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("win32") !== -1) {
            strOSBits = "32 bits";
        } else if (strPlatform.indexOf("x64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("x32") !== -1) {
            strOSBits = "32 bits";
        } else if (strPlatform.indexOf("x86") !== -1) {
            strOSBits = "32 bits*";
        } else if (strPlatform.indexOf("ppc") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("alpha") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("68k") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("iphone") !== -1) {
            strOSBits = "32 bits";
        } else if (strPlatform.indexOf("android") !== -1) {
            strOSBits = "32 bits";
        } else {
            strOSBits = "Unknown";
        }
        strOut = strOSBits;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

/* Fingerprint Java Enabled */
function fingerprint_java() {
    var bolJavaEnabled, bolOut;
    try {
        bolJavaEnabled = (navigator.javaEnabled()) ? 1 : 0;
        bolOut = bolJavaEnabled;
        return bolOut;
    } catch (err) {
        return glbOnError;
    }
}

/* Fingerprint Cookies Enabled */
function fingerprint_cookie() {
    var bolCookieEnabled, bolOut;
    try {
        bolCookieEnabled = (navigator.cookieEnabled) ? 1 : 0;
        if (typeof navigator.cookieEnabled === "undefined" && !bolCookieEnabled) {
            document.cookie = "testcookie";
            bolCookieEnabled = (document.cookie.indexOf("testcookie") !== -1) ? 1 : 0;
        }
        bolOut = bolCookieEnabled;
        return bolOut;
    } catch (err) {
        return glbOnError;
    }
}

/* Fingerprint Timezone */
function fingerprint_timezone() {
    var numGMTHours, numOut;
    try {
        numGMTHours = (new Date().getTimezoneOffset() / 60) * (-1);
        numOut = numGMTHours;
        return numOut;
    } catch (err) {
        return glbOnError;
    }
}

/* Fingerprint Language */
function fingerprint_language() {
    var strLang, strOut;

    try {
        if (glbOutputMode === "RSA") {
            if (typeof(navigator.language) !== "undefined") {
                strLang = "lang" + glbPair + navigator.language + glbSep;
            } else if (typeof(navigator.browserLanguage) !== "undefined") {
                strLang = "lang" + glbPair + navigator.browserLanguage + glbSep;
            } else {
                strLang = "lang" + glbPair + glbSep;
            }
            if (typeof(navigator.systemLanguage) !== "undefined") {
                strLang += "syslang" + glbPair + navigator.systemLanguage + glbSep;
            } else {
                strLang += "syslang" + glbPair + glbSep;
            }
            if (typeof(navigator.userLanguage) !== "undefined") {
                strLang += "userlang" + glbPair + navigator.userLanguage;
            } else {
                strLang += "userlang" + glbPair;
            }
        } else {
            if (typeof(navigator.language) !== "undefined") {
                strLang = "BRW" + glbPair + navigator.language + glbSep;
            } else if (typeof(navigator.browserLanguage) !== "undefined") {
                strLang = "BRW" + glbPair + navigator.browserLanguage + glbSep;
            } else {
                strLang = "BRW" + glbPair + glbSep;
            }
            if (typeof(navigator.systemLanguage) !== "undefined") {
                strLang += "SYS" + glbPair + navigator.systemLanguage + glbSep;
            } else {
                strLang += "SYS" + glbPair + glbSep;
            }
            if (typeof(navigator.userLanguage) !== "undefined") {
                strLang += "USR" + glbPair + navigator.userLanguage;
            } else {
                strLang += "USR" + glbPair;
            }
        }
        strOut = strLang;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

/* Fingerprint Display */
function fingerprint_display() {
    var strDisplay, strOut;
    strDisplay = "";

    try {
        if (self.screen) {
            if (glbOutputMode === "RSA") {
                strDisplay += screen.colorDepth + glbSep + screen.width + glbSep + screen.height + glbSep + screen.availHeight;

            } else {
                strDisplay += screen.colorDepth + glbSep + screen.width + glbSep + screen.height + glbSep + screen.availWidth + glbSep + screen.availHeight;
                if (navigator.userAgent.toLowerCase().indexOf("msie") !== -1) {
                    strDisplay += glbSep + screen.deviceXDPI + glbSep + screen.deviceYDPI;
                }
            }
        }
        strOut = strDisplay;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}



/* Fingerprint Flash Version */
function fingerprint_flash() {
    var objPlayerVersion, strTemp, strOut;
    try {
        objPlayerVersion = swfobject.getFlashPlayerVersion();
        strTemp = objPlayerVersion.major + "." + objPlayerVersion.minor + "." + objPlayerVersion.release;
        if (strTemp === "0.0.0") {
            strTemp = "Not Installed";
        }
        strOut = strTemp;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

/* Fingerprint Silverlight Version */
function fingerprint_silverlight() {
    var objControl, objPlugin, strSilverlightVersion, strOut;
    try {
        try {
            objControl = new ActiveXObject('AgControl.AgControl');
            if (objControl.IsVersionSupported("3.0")) {
                strSilverlightVersion = "3.x";
            } else if (objControl.IsVersionSupported("2.0")) {
                strSilverlightVersion = "2.x";
            } else {
                strSilverlightVersion = "1.x";
            }
            objControl = null;
        } catch (e) {
            objPlugin = navigator.plugins["Silverlight Plug-In"];
            if (objPlugin) {
                if (objPlugin.description === "1.0.30226.2") {
                    strSilverlightVersion = "2.x";
                } else {
                    strSilverlightVersion = parseInt(objPlugin.description[0], 10);
                }
            } else {
                strSilverlightVersion = "Not Installed";
            }
        }
        strOut = strSilverlightVersion;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

/* Detect Plugins */
function fingerprint_plugins() {
    var strUserAgent, strOpera, strIE, htMozComponents, htIEComponents, strMoz, strKey, strName, strTemp, bolFirst, i, strOut;
    try {
        strUserAgent = navigator.userAgent.toLowerCase();
        strOpera = strUserAgent.indexOf("strOpera") >= 0;
        strIE = strUserAgent.indexOf("msie") >= 0 && !strOpera;
    } catch (e) {
        /* probably IE6 */
    }
    try {
        /* Create hashtable of mozilla components */
        htMozComponents = new Hashtable();
        if (glbOutputMode === "RSA") {
            htMozComponents.put('npnul32.dll', 'def'); // Mozilla Default
            htMozComponents.put('npqtplugin6.dll', 'qt6'); // Quicktime 6.x
            htMozComponents.put('npqtplugin5.dll', 'qt5'); // Quicktime 5.x
            htMozComponents.put('npqtplugin4.dll', 'qt4'); // Quicktime 4.x
            htMozComponents.put('npqtplugin3.dll', 'qt3'); // Quicktime 3.x
            htMozComponents.put('npqtplugin2.dll', 'qt2'); // Quicktime 2.x
            htMozComponents.put('npqtplugin.dll', 'qt1'); // Quicktime 1.x
            htMozComponents.put('nppdf32.dll', 'pdf'); // Adobe Acrobat
            htMozComponents.put('NPSWF32.dll', 'swf'); // Adobe Flash
            htMozComponents.put('NPJava11.dll', 'j11'); // Java 1.4.2_02
            htMozComponents.put('NPJava12.dll', 'j12'); // Java 1.4.2_02
            htMozComponents.put('NPJava13.dll', 'j13'); // Java 1.4.2_02
            htMozComponents.put('NPJava32.dll', 'j32'); // Java 1.4.2_02
            htMozComponents.put('NPJava14.dll', 'j14'); // Java 2 5.0 Update 4
            htMozComponents.put('npoji600.dll', 'j61'); // Java 2 5.0 Update 4
            htMozComponents.put('NPJava131_16.dll', 'j16'); // Java 1.3.1_16
            htMozComponents.put('NPOFFICE.DLL', 'mso'); // Microsoft Office 2003
            htMozComponents.put('npdsplay.dll', 'wpm'); // Windows Media Player
            htMozComponents.put('npwmsdrm.dll', 'drm'); // Windows DRM
            htMozComponents.put('npdrmv2.dll', 'drn'); // Netscape DRM
            htMozComponents.put('nprjplug.dll', 'rjl'); // Real Jukebox
            htMozComponents.put('nppl3260.dll', 'rpl'); // Real Player Live Connect
            htMozComponents.put('nprpjplug.dll', 'rpv'); // Real Player Version
            htMozComponents.put('npchime.dll', 'chm'); // Chime
            htMozComponents.put('npCortona.dll', 'cor'); // Cortina
            htMozComponents.put('np32dsw.dll', 'dsw'); // Macromedia Director
            htMozComponents.put('np32asw.dll', 'asw'); // Macromedia Authorware
        } else {
            htMozComponents.put('np32asw.dll', 'asw'); // Macromedia Authorware
            htMozComponents.put('npchime.dll', 'chm'); // Chime
            htMozComponents.put('npCortona.dll', 'cor'); // Cortina
            htMozComponents.put('npnul32.dll', 'def'); // Mozilla Default
            htMozComponents.put('npwmsdrm.dll', 'drm'); // Windows DRM
            htMozComponents.put('npdrmv2.dll', 'drn'); // Netscape DRM
            htMozComponents.put('np32dsw.dll', 'dsw'); // Macromedia Director
            htMozComponents.put('NPJava11.dll', 'j11'); // Java 1.4.2_02
            htMozComponents.put('NPJava12.dll', 'j12'); // Java 1.4.2_02
            htMozComponents.put('NPJava13.dll', 'j13'); // Java 1.4.2_02
            htMozComponents.put('NPJava131_16.dll', 'j131_16'); // Java 1.3.1_16
            htMozComponents.put('NPJava14.dll', 'j14'); // Java 2 5.0 Update 4
            htMozComponents.put('NPJava142_01.dll', 'j142_01'); // Java 1.3.1_16
            htMozComponents.put('NPJava32.dll', 'j32'); // Java 1.4.2_02
            htMozComponents.put('npoji600.dll', 'j600'); // Java 2 5.0 Update 4
            htMozComponents.put('npoji610.dll', 'j610'); // Java 2 5.0 Update 4
            htMozComponents.put('npdeploytk.dll', 'jdk=6.19-'); // Java Deployment Toolkit pre Java 6 Update 20
            htMozComponents.put('npdeployJava1.dll', 'jdk=6.20+'); // Java Deployment Toolkit Java 6 Update 20+
            htMozComponents.put('NPOFFICE.DLL', 'mso2K3'); // Microsoft Office 2003
            htMozComponents.put('nppdf32.dll', 'pdf'); // Adobe Acrobat
            htMozComponents.put('npqtplugin.dll', 'qt1'); // Quicktime 1.x
            htMozComponents.put('npqtplugin2.dll', 'qt2'); // Quicktime 2.x
            htMozComponents.put('npqtplugin3.dll', 'qt3'); // Quicktime 3.x
            htMozComponents.put('npqtplugin4.dll', 'qt4'); // Quicktime 4.x
            htMozComponents.put('npqtplugin5.dll', 'qt5'); // Quicktime 5.x
            htMozComponents.put('npqtplugin6.dll', 'qt6'); // Quicktime 6.x
            htMozComponents.put('npqtplugin7.dll', 'qt7'); // Quicktime 7.x
            htMozComponents.put('nprjplug.dll', 'rjl'); // Real Jukebox
            htMozComponents.put('nppl3260.dll', 'rpl'); // Real Player Live Connect
            htMozComponents.put('nprpjplug.dll', 'rpv'); // Real Player Version
            htMozComponents.put('NPSWF32.dll', 'swf'); // Adobe Flash
            htMozComponents.put('npdsplay.dll', 'wpm'); // Windows Media Player
        }

        /* Create hashtable of IE components */
        htIEComponents = new Hashtable();
        if (glbOutputMode === "RSA") {
            htIEComponents.put('7790769C-0471-11D2-AF11-00C04FA35D02', 'abk'); // Address Book
            htIEComponents.put('89820200-ECBD-11CF-8B85-00AA005B4340', 'wnt'); // Windows Desktop Update NT
            htIEComponents.put('47F67D00-9E55-11D1-BAEF-00C04FC2D130', 'aol'); // AOL ART Image Format Support
            htIEComponents.put('76C19B38-F0C8-11CF-87CC-0020AFEECF20', 'arb'); // Arabic Text Display Support
            htIEComponents.put('76C19B34-F0C8-11CF-87CC-0020AFEECF20', 'chs'); // Chinese (Simplified) Text Display Support
            htIEComponents.put('76C19B33-F0C8-11CF-87CC-0020AFEECF20', 'cht'); // Chinese (traditional) Text Display Support
            htIEComponents.put('9381D8F2-0288-11D0-9501-00AA00B911A5', 'dht'); // Dynamic HTML Data Binding
            htIEComponents.put('4F216970-C90C-11D1-B5C7-0000F8051515', 'dhj'); // Dynamic HTML Data Binding for Java
            htIEComponents.put('283807B5-2C60-11D0-A31D-00AA00B92C03', 'dan'); // DirectAnimation
            htIEComponents.put('44BBA848-CC51-11CF-AAFA-00AA00B6015C', 'dsh'); // DirectShow
            htIEComponents.put('76C19B36-F0C8-11CF-87CC-0020AFEECF20', 'heb'); // Hebrew Text Display Support
            htIEComponents.put('89820200-ECBD-11CF-8B85-00AA005B4383', 'ie5'); // Internet Explorer 5 Browser
            htIEComponents.put('5A8D6EE0-3E18-11D0-821E-444553540000', 'icw'); // Internet Connection Wizard
            htIEComponents.put('630B1DA0-B465-11D1-9948-00C04F98BBC9', 'ibe'); // Internet Explorer Browsing Enhancements
            htIEComponents.put('08B0E5C0-4FCB-11CF-AAA5-00401C608555', 'iec'); // Internet Explorer Classes for Java
            htIEComponents.put('45EA75A0-A269-11D1-B5BF-0000F8051515', 'ieh'); // Internet Explorer Help
            htIEComponents.put('DE5AED00-A4BF-11D1-9948-00C04F98BBC9', 'iee'); // Internet Explorer Help Engine
            htIEComponents.put('76C19B30-F0C8-11CF-87CC-0020AFEECF20', 'jap'); // Japanese Text Display Support
            htIEComponents.put('76C19B31-F0C8-11CF-87CC-0020AFEECF20', 'krn'); // Korean Text Display Support
            htIEComponents.put('76C19B50-F0C8-11CF-87CC-0020AFEECF20', 'lan'); // Language Auto-Selection
            htIEComponents.put('D27CDB6E-AE6D-11CF-96B8-444553540000', 'swf'); // Macromedia Flash
            htIEComponents.put('2A202491-F00D-11CF-87CC-0020AFEECF20', 'shw'); // Macromedia Shockwave Director
            htIEComponents.put('5945C046-LE7D-LLDL-BC44-00C04FD912BE', 'msn'); // MSN Messenger Service
            htIEComponents.put('22D6F312-B0F6-11D0-94AB-0080C74C7E95', 'wmp'); // Windows Media Player
            htIEComponents.put('3AF36230-A269-11D1-B5BF-0000F8051515', 'obp'); // Offline Browsing Pack
            htIEComponents.put('44BBA840-CC51-11CF-AAFA-00AA00B6015C', 'oex'); // Outlook Express
            htIEComponents.put('44BBA842-CC51-11CF-AAFA-00AA00B6015B', 'net'); // NetMeeting NT
            htIEComponents.put('76C19B32-F0C8-11CF-87CC-0020AFEECF20', 'pan'); // Pan-European Text Display Support
            htIEComponents.put('76C19B35-F0C8-11CF-87CC-0020AFEECF20', 'thi'); // Thai Text Display Support
            htIEComponents.put('CC2A9BA0-3BDD-11D0-821E-444553540000', 'tks'); // Task Scheduler
            htIEComponents.put('3BF42070-B3B1-11D1-B5C5-0000F8051515', 'uni'); // Uniscribe
            htIEComponents.put('10072CEC-8CC1-11D1-986E-00A0C955B42F', 'vtc'); // Vector Graphics Rendering (VML)
            htIEComponents.put('76C19B37-F0C8-11CF-87CC-0020AFEECF20', 'vnm'); // Vietnamese Text Display Support
            htIEComponents.put('08B0E5C0-4FCB-11CF-AAA5-00401C608500', 'mvm'); // Microsoft virtual machine
            htIEComponents.put('4F645220-306D-11D2-995D-00C04F98BBC9', 'vbs'); // Visual Basic Scripting Support
            htIEComponents.put('73FA19D0-2D75-11D2-995D-00C04F98BBC9', 'wfd'); // Web Folders
        } else {
            htIEComponents.put('7790769C-0471-11D2-AF11-00C04FA35D02', 'abk'); // Address Book
            htIEComponents.put('47F67D00-9E55-11D1-BAEF-00C04FC2D130', 'aol'); // AOL ART Image Format Support
            htIEComponents.put('76C19B38-F0C8-11CF-87CC-0020AFEECF20', 'arb'); // Arabic Text Display Support
            htIEComponents.put('76C19B34-F0C8-11CF-87CC-0020AFEECF20', 'chs'); // Chinese (Simplified) Text Display Support
            htIEComponents.put('76C19B33-F0C8-11CF-87CC-0020AFEECF20', 'cht'); // Chinese (traditional) Text Display Support
            htIEComponents.put('283807B5-2C60-11D0-A31D-00AA00B92C03', 'dan'); // DirectAnimation
            htIEComponents.put('4F216970-C90C-11D1-B5C7-0000F8051515', 'dhj'); // Dynamic HTML Data Binding for Java
            htIEComponents.put('9381D8F2-0288-11D0-9501-00AA00B911A5', 'dht'); // Dynamic HTML Data Binding
            htIEComponents.put('44BBA848-CC51-11CF-AAFA-00AA00B6015C', 'dsh'); // DirectShow
            htIEComponents.put('76C19B36-F0C8-11CF-87CC-0020AFEECF20', 'heb'); // Hebrew Text Display Support
            htIEComponents.put('630B1DA0-B465-11D1-9948-00C04F98BBC9', 'ibe'); // Internet Explorer Browsing Enhancements
            htIEComponents.put('5A8D6EE0-3E18-11D0-821E-444553540000', 'icw'); // Internet Connection Wizard
            htIEComponents.put('89820200-ECBD-11CF-8B85-00AA005B4383', 'ie5'); // Internet Explorer 5 Browser
            htIEComponents.put('08B0E5C0-4FCB-11CF-AAA5-00401C608555', 'iec'); // Internet Explorer Classes for Java
            htIEComponents.put('DE5AED00-A4BF-11D1-9948-00C04F98BBC9', 'iee'); // Internet Explorer Help Engine
            htIEComponents.put('45EA75A0-A269-11D1-B5BF-0000F8051515', 'ieh'); // Internet Explorer Help
            htIEComponents.put('76C19B30-F0C8-11CF-87CC-0020AFEECF20', 'jap'); // Japanese Text Display Support
            htIEComponents.put('8AD9C840-044E-11D1-B3E9-00805F499D93', 'jav'); // Java Plug-in
            htIEComponents.put('76C19B31-F0C8-11CF-87CC-0020AFEECF20', 'krn'); // Korean Text Display Support
            htIEComponents.put('76C19B50-F0C8-11CF-87CC-0020AFEECF20', 'lan'); // Language Auto-Selection
            htIEComponents.put('5945C046-LE7D-LLDL-BC44-00C04FD912BE', 'msn'); // MSN Messenger Service
            htIEComponents.put('08B0E5C0-4FCB-11CF-AAA5-00401C608500', 'mvm'); // Microsoft virtual machine
            htIEComponents.put('44BBA842-CC51-11CF-AAFA-00AA00B6015B', 'net'); // NetMeeting NT
            htIEComponents.put('3AF36230-A269-11D1-B5BF-0000F8051515', 'obp'); // Offline Browsing Pack
            htIEComponents.put('44BBA840-CC51-11CF-AAFA-00AA00B6015C', 'oex'); // Outlook Express
            htIEComponents.put('76C19B32-F0C8-11CF-87CC-0020AFEECF20', 'pan'); // Pan-European Text Display Support
            htIEComponents.put('2A202491-F00D-11CF-87CC-0020AFEECF20', 'shw'); // Macromedia Shockwave Director
            htIEComponents.put('D27CDB6E-AE6D-11CF-96B8-444553540000', 'swf'); // Macromedia Flash
            htIEComponents.put('76C19B35-F0C8-11CF-87CC-0020AFEECF20', 'thi'); // Thai Text Display Support
            htIEComponents.put('CC2A9BA0-3BDD-11D0-821E-444553540000', 'tks'); // Task Scheduler
            htIEComponents.put('3BF42070-B3B1-11D1-B5C5-0000F8051515', 'uni'); // Uniscribe
            htIEComponents.put('4F645220-306D-11D2-995D-00C04F98BBC9', 'vbs'); // Visual Basic Scripting Support
            htIEComponents.put('76C19B37-F0C8-11CF-87CC-0020AFEECF20', 'vnm'); // Vietnamese Text Display Support
            htIEComponents.put('10072CEC-8CC1-11D1-986E-00A0C955B42F', 'vtc'); // Vector Graphics Rendering (VML)
            htIEComponents.put('73FA19D0-2D75-11D2-995D-00C04F98BBC9', 'wfd'); // Web Folders
            htIEComponents.put('22D6F312-B0F6-11D0-94AB-0080C74C7E95', 'wmp'); // Windows Media Player
            htIEComponents.put('89820200-ECBD-11CF-8B85-00AA005B4340', 'wnt'); // Windows Desktop Update NT
        }

        strTemp = "";
        bolFirst = true;

        /* strOpera gives full path of the file, extract the filenames, ignoring descripton and length */
        if (navigator.plugins.length > 0) {
            for (i = 0; i < navigator.plugins.length; i = i + 1) {
                strPlugin = navigator.plugins[i];
                strMoz = stripFullPath(strPlugin.filename, "Plugins");
                strKey = htMozComponents.containsKey(strMoz);
                if (bolFirst === true) {
                    if (strKey) {
                        strTemp += htMozComponents.get(strMoz);
                        bolFirst = false;
                    }
                } else {
                    if (strKey) {
                        strTemp += glbSep + htMozComponents.get(strMoz);
                    }
                }
            }
        } else if (navigator.mimeTypes.length > 0) {
            for (i = 0; i < navigator.mimeTypes.length; i = i + 1) {
                mimeType = navigator.mimeTypes[i];
                if (bolFirst === true) {
                    strKey = htMozComponents.containsKey(mimeType);
                    if (strKey) {
                        strTemp += htMozComponents.get(mimeType) + glbPair + mimeType;
                        bolFirst = false;
                    } else {
                        strTemp += "Unknown" + glbPair + mimeType;
                        bolFirst = false;
                    }
                } else {
                    strKey = htMozComponents.containsKey(mimeType);
                    if (strKey) {
                        strTemp += glbSep + htMozComponents.get(mimeType) + glbPair + mimeType;
                    }
                }
            }
        } else if (strIE) {
            document.body.addBehavior("#default#clientCaps");
            strKey = htIEComponents.keys();
            for (i = 0; i < htIEComponents.size(); i = i + 1) {
                strVersion = activeXDetect(strKey[i]);
                strName = htIEComponents.get(strKey[i]);
                if (strVersion) {
                    if (bolFirst === true) {
                        strTemp = strName + glbPair + strVersion;
                        bolFirst = false;
                    } else {
                        strTemp += glbSep + strName + glbPair + strVersion;
                    }
                }
            }
            if (glbOutputMode !== "RSA") {
                strTemp = strTemp.replace(/,/g, ".");
            }
        }
        strTemp = stripIllegalChars(strTemp);
        if (strTemp === "") {
            strTemp = "None";
        }
        strOut = strTemp;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}


/* Fingerprint Fonts */
function testFont(name) {
    var body, test, bolInstalled, strTemplate, ab;

    try {
        body = document.body;
        test = document.createElement('div');
        bolInstalled = false;
        strTemplate = '<b style="display:inline !important; width:auto !important; font:normal 10px/1 \'X\',sans-serif !important">ww</b>' + '<b style="display:inline !important; width:auto !important; font:normal 10px/1 \'X\',monospace !important">ww</b>',
        ab;
        name = name.replace(/['"<>]/g, '');
        if (name) {
            test.innerHTML = strTemplate.replace(/X/g, name);
            test.style.cssText = 'position: absolute; visibility: hidden; display: block !important';
            body.insertBefore(test, body.firstChild);
            ab = test.getElementsByTagName('b');
            bolInstalled = ab[0].offsetWidth === ab[1].offsetWidth;
            body.removeChild(test);
        }
        return bolInstalled;
    } catch (err) {
        return glbOnError;
    }
}

function fingerprint_fonts() {
    var arrFonts, strTmp, i, strOut;

    try {
        arrFonts = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Aharoni", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Arab", "Arabic Transparent", "Arabic Typesetting", "Arial Baltic", "Arial Black", "Arial CE", "Arial CYR", "Arial Greek", "Arial TUR", "Arial", "Batang", "BatangChe", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Browallia New", "BrowalliaUPC", "Calibri Light", "Calibri", "Californian FB", "Cambria Math", "Cambria", "Candara", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Comic Sans MS", "Consolas", "Constantia", "Copperplate Gothic Light", "Corbel", "Cordia New", "CordiaUPC", "Courier New Baltic", "Courier New CE", "Courier New CYR", "Courier New Greek", "Courier New TUR", "Courier New", "DFKai-SB", "DaunPenh", "David", "DejaVu LGC Sans Mono", "Desdemona", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Engravers MT", "Eras Bold ITC", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Eurostile", "FangSong", "Forte", "FrankRuehl", "Franklin Gothic Heavy", "Franklin Gothic Medium", "FreesiaUPC", "French Script MT", "Gabriola", "Gautami", "Georgia", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "GungSeo", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harrington", "Hei S", "HeiT", "Heisei Kaku Gothic", "Hiragino Sans GB", "Impact", "Informal Roman", "IrisUPC", "Iskoola Pota", "JasmineUPC", "KacstOne", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "Kino MT", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N", "Lao UI", "Latha", "Leelawadee", "Levenim MT", "LilyUPC", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Console", "Lucida Fax", "Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS UI Gothic", "MV Boli", "Magneto", "Malgun Gothic", "Mangal", "Marlett", "Matura MT Script Capitals", "Meiryo UI", "Meiryo", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "Miriam Fixed", "Miriam", "Mongolian Baiti", "MoolBoran", "NSimSun", "Narkisim", "News Gothic MT", "Niagara Solid", "Nyala", "PMingLiU", "PMingLiU-ExtB", "Palace Script MT", "Palatino Linotype", "Papyrus", "Perpetua", "Plantagenet Cherokee", "Playbill", "Prelude Bold", "Prelude Condensed Bold", "Prelude Condensed Medium", "Prelude Medium", "PreludeCompressedWGL Black", "PreludeCompressedWGL Bold", "PreludeCompressedWGL Light", "PreludeCompressedWGL Medium", "PreludeCondensedWGL Black", "PreludeCondensedWGL Bold", "PreludeCondensedWGL Light", "PreludeCondensedWGL Medium", "PreludeWGL Black", "PreludeWGL Bold", "PreludeWGL Light", "PreludeWGL Medium", "Raavi", "Rachana", "Rockwell", "Rod", "Sakkal Majalla", "Sawasdee", "Script MT Bold", "Segoe Print", "Segoe Script", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Segoe UI", "Shonar Bangla", "Showcard Gothic", "Shruti", "SimHei", "SimSun", "SimSun-ExtB", "Simplified Arabic Fixed", "Simplified Arabic", "Snap ITC", "Sylfaen", "Symbol", "Tahoma", "Times New Roman Baltic", "Times New Roman CE", "Times New Roman CYR", "Times New Roman Greek", "Times New Roman TUR", "Times New Roman", "TlwgMono", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Utsaah", "Vani", "Verdana", "Vijaya", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings"];
        strTmp = "";

        for (i = 0; i < 230; i = i + 1) {
            if (testFont(arrFonts[i]) === true) {
                strTmp += arrFonts[i] + glbSep;
            }
        }
        if (strTmp.length > 1) {
            strTmp = strTmp.substring(0, strTmp.length - 1);
        }
        strOut = strTmp;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

/* Utility Functions */
function activeXDetect(componentClassID) {
    try {
        componentVersion = document.body.getComponentVersion('{' + componentClassID + '}', 'ComponentID');
        return (componentVersion !== null) ? componentVersion : false;
    } catch (err) {
        return glbOnError;
    }
}

function stripIllegalChars(strValue) {
    var i, strOriginal, strTmp, strOut;
    try {
        strTmp = "";
        strOriginal = strValue.toLowerCase();
        for (i = 0; i < strOriginal.length; i = i + 1) {
            if (strOriginal.charAt(i) !== '\n' && strOriginal.charAt(i) !== '/' && strOriginal.charAt(i) !== "\\") {
                strTmp += strOriginal.charAt(i);
            } else if (strOriginal.charAt(i) === '\n') {
                strTmp += "n";
            }
        }
        strOut = strTmp;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

function stripFullPath(tempFileName, lastDir) {
    var strFileName, numFileNameStart, numFileNameFinish, strOut;
    try {
        strFileName = tempFileName;
        numFileNameStart = strFileName.lastIndexOf(lastDir);
        if (numFileNameStart < 0) {
            return tempFileName;
        }
        numFileNameFinish = strFileName.length;
        strFileName = strFileName.substring(numFileNameStart + lastDir.length, numFileNameFinish);
        strOut = strFileName;
        return strOut;
    } catch (err) {
        return glbOnError;
    }
}

function Hashtable() {
    this.containsKey = hashtable_containsKey;
    this.get = hashtable_get;
    this.keys = hashtable_keys;
    this.put = hashtable_put;
    this.size = hashtable_size;
    this.hashtable = new Array();
}

function hashtable_containsKey(key) {
    var exists, i;
    exists = false;
    for (i in this.hashtable) {
        if (i === key && this.hashtable[i] !== null) {
            exists = true;
            break;
        }
    }
    return exists;
}

function hashtable_get(key) {
    return this.hashtable[key];
}

function hashtable_keys() {
    var keys, i;
    keys = new Array();
    for (i in this.hashtable) {
        if (this.hashtable[i] !== null) {
            keys.push(i);
        }
    }
    return keys;
}

function hashtable_put(key, value) {
    if (key === null || value === null) {
        throw "NullPointerException {" + key + "},{" + value + "}";
    } else {
        this.hashtable[key] = value;
    }
}

function hashtable_size() {
    var size, i;
    size = 0;
    for (i in this.hashtable) {
        if (this.hashtable[i] !== null) {
            size++;
        }
    }
    return size;
}