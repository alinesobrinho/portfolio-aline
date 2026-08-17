import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSending = false;

  successMessage = '';

  errorMessage = '';


  async sendMessage(): Promise<void> {

    this.successMessage = '';

    this.errorMessage = '';

    this.isSending = true;


    try {

      const response = await fetch(
        'https://formspree.io/f/xkjwqlpw',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },

          body: JSON.stringify({
            name: this.formData.name,
            email: this.formData.email,
            message: this.formData.message
          })
        }
      );


      if (response.ok) {

        this.successMessage =
          'Mensagem enviada com sucesso! Obrigada pelo contato. 💜';


        this.formData = {
          name: '',
          email: '',
          message: ''
        };

      } else {

        this.errorMessage =
          'Não foi possível enviar a mensagem. Tente novamente.';

      }

    } catch (error) {

      this.errorMessage =
        'Ocorreu um erro ao enviar a mensagem. Tente novamente.';

    } finally {

      this.isSending = false;

    }

  }

}