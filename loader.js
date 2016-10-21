Loader = function() {
            this.loaderElement = $('#loader');
            this.loaderElement.css({
                        width: $('#loader').parent().width() + 'px'
            });
        };

        Loader.prototype.show = function() {
            this.loaderElement.show();
        };

        Loader.prototype.hide = function() {
            this.loaderElement.fadeOut('fast');
        };

        Loader.prototype.showNotice = function(success) {
            var message;
            var color;

            if (success) {
                message = 'Сохранено';
                color = 'green';
            } else {
                message = 'Ошибка';
                color = 'red';
            }

            new jBox('Notice', {
                position: {y: 60},
                content: message,
                fixed: true,
                fade: true,
                animation: 'slide',
                color: color
            });
        }
