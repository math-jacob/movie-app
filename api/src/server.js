require('express-async-errors');
const express = require('express')
const routes = require('./routes')
const AppError = require('./utils/AppError');

const app = express();

app.use(express.json());
app.use(routes)
app.use((error, request, response, next) => {
  
  // Erro do lado do cliente
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  // Erro padrão
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}`));