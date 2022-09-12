function display(text)
        {
            alert(text);
            console.log(text);
            return false;
        }

        $('form').on('submit', function (event) {
            event.preventDefault();
            var form = $(this);
            var firstOperand = form.find('input[name="first-operand"]').val();
            var operator = form.find('select[name="operator"]').val();
            var secondOperand = form.find('input[name="second-operand"]').val();

            // Validation
            if (parseInt(firstOperand) != firstOperand || parseInt(secondOperand) != secondOperand)
                return display('Error :(');
            firstOperand = parseInt(firstOperand);
            secondOperand = parseInt(secondOperand);
            if (firstOperand < 0 || secondOperand < 0)
                return display('Error :(');
            if (['+', '-', '*', '/', '%'].indexOf(operator) === -1)
                return display('Error :(');
            if ((operator === '/' || operator === '%') && secondOperand === 0)
                return display('It’s over 9000!');

            // Calcul
            switch (operator) {
                case '+':
                    display((firstOperand + secondOperand).toString());
                    break;
                case '-':
                    display((firstOperand - secondOperand).toString());
                    break;
                case '*':
                    display((firstOperand * secondOperand).toString());
                    break;
                case '/':
                    display((firstOperand / secondOperand).toString());
                    break;
                case '%':
                    display((firstOperand % secondOperand).toString());
                    break;
            }
        });

        setInterval(function () {
            alert('Please, use me...');
        }, 30000)