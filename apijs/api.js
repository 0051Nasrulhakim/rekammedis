// ===============================
// KONFIGURASI GLOBAL
// ===============================
const BASE_URL = "http://192.168.2.6:7777/api";
const LOGIN_URL = BASE_URL + "/login";

// ===============================
// TOKEN FUNCTIONS
// ===============================
function getToken() {
    return localStorage.getItem("token");
}

function saveToken(token) {
    localStorage.setItem("token", token);
}

// ===============================
// LOGIN SEKALI SAJA
// ===============================
function ensureLogin(callback) {
    let token = getToken();
    if (token) return callback(token);

    $.ajax({
        url: LOGIN_URL,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ nip: "nasrul" }),
        success: function (res) {
            saveToken(res.token);
            callback(res.token);
        },
        error: function (err) {
            console.error("Login gagal:", err);
        }
    });
}

// ===============================
// WRAPPER API UNIVERSAL
// ===============================
function apiAjax(options) {
    let token = getToken();

    if (!token) {
        return ensureLogin(function (newToken) {
            options.headers = options.headers || {};
            options.headers["Authorization"] = "Bearer " + newToken;
            $.ajax(options);
        });
    }

    options.headers = options.headers || {};
    options.headers["Authorization"] = "Bearer " + token;

    let originalError = options.error;

    options.error = function (xhr) {
        if (xhr.status === 401) {
            localStorage.removeItem("token");
            ensureLogin(function (newToken) {
                options.headers["Authorization"] = "Bearer " + newToken;
                $.ajax(options);
            });
        } else {
            if (originalError) originalError(xhr);
        }
    };

    $.ajax(options);
}
