class AjaxUtils {
    static get(url, data) {
        // return axios.get(url, { params: data }).then(response => response.data);
        return new Promise((resolve, reject) =>
            $.get(url, data)
                .done(response => resolve(response))
                .fail(error => reject(error)));
    }

    static post(url, data) {
        // return axios.post(url, { params: data }).then(response => response.data);
        return new Promise((resolve, reject) =>
            $.post(url, data)
                .done(response => resolve(response))
                .fail(error => reject(error)));
    }
}