# Próximos passos — sistema de contato VPO Tech

anotei aqui o que falta fazer pra deixar o formulário de contato 100% funcional e profissional.  
como agora eu tô no **Mac**, vou deixar isso organizado pra **fazer depois no Windows** com calma.

---

## o que preciso fazer

### 1. criar conta no Resend

o Resend vai ser o serviço responsável por enviar os emails do formulário de contato direto pra mim.

- entrar em: https://resend.com/signup
- criar a conta com o email: `devlucasbarros@gmail.com`
- confirmar o email
- fazer login normalmente

---

### 2. gerar a API Key do Resend

depois de logado:

- ir em **API Keys**
- clicar em **Create API Key**
- dar um nome tipo: `VPO Tech Production`
- criar a chave
- **copiar a key** (começa com `re_`)

> obs: essa chave só aparece uma vez. se perder, tem que gerar outra.

---

### 3. configurar a API Key no projeto

no projeto:

- abrir o arquivo `.env.local`
- adicionar a variável:

```env
RESEND_API_KEY=re_sua_chave_aqui
```
