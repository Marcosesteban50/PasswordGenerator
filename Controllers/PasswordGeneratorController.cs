using GeneradorDeContrasenas.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace GeneradorDeContrasenas.Controllers
{
    public class PasswordGeneratorController : Controller
    {

        public IActionResult Index(PasswordModel passModel)
        {
            var passwordModel = new PasswordModel
            {
                PasswordLength = passModel.PasswordLength,
                IncludeUpperCase = passModel.IncludeUpperCase,
                IncludeNumbers = passModel.IncludeNumbers,
                IncludeAll = passModel.IncludeAll,
                GeneratedPassword = GenerateRandomPassword(passModel)

            };

            return View(passwordModel);
        }

        private string GenerateRandomPassword(PasswordModel passwordModel)
        {

             string chars = "";

            //Uppercase
            if (passwordModel.IncludeUpperCase)
            {
                chars = "";
                chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
            }

            //Numbers
            if (passwordModel.IncludeNumbers)
            {
                chars = "";
                chars += "0123456789"; 
            }
            //Symbols
            if (passwordModel.IncludeSymbols)
            {
                chars += "!@#$%^&*()-_+=.,";
            }
            //LowerCase
            if (passwordModel.IncludeLowerCase)
            {
                chars += "abcdefghijklmnopqrstuvwxyz";
            }
  



            //2 Opciones Number y UpperCase
            if(passwordModel.IncludeNumbers && passwordModel.IncludeUpperCase)
            {
                chars = "";
                chars += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            }
            //Number y LowerCase
            if(passwordModel.IncludeNumbers && passwordModel.IncludeLowerCase)
            {
                chars = "";
                chars += "0123456789abcdefghijklmnopqrstuvwxyz";
            }
            //Number y Symbols

            if (passwordModel.IncludeNumbers && passwordModel.IncludeSymbols)
            {
                chars = "";
                chars += "0123456789!@#$%^&*()-_+=.,";
            }


            //2 Opciones lower y Upper
            if (passwordModel.IncludeUpperCase && passwordModel.IncludeLowerCase)
            {
                chars = "";
                chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            }
            //Upper y Symbols
            if (passwordModel.IncludeUpperCase && passwordModel.IncludeSymbols)
            {
                chars = "";
                chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_+=.,";
            }


            //2 Opciones  Lower y Symbols
            if (passwordModel.IncludeLowerCase && passwordModel.IncludeSymbols)
            {
                chars = "";
                chars += "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_+=.,";
            }
           




            //3 Opciones Numbers, Upper, Lower

            if (passwordModel.IncludeNumbers && passwordModel.IncludeUpperCase && passwordModel.IncludeLowerCase)
            {
                chars = "";
                chars += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            }

            //3 Opciones Number Upper Symbols
            if (passwordModel.IncludeNumbers && passwordModel.IncludeUpperCase && passwordModel.IncludeSymbols)
            {
                chars = "";
                chars += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_+=.,";
            }

            //3 Opciones Number Lower Symbols
            if (passwordModel.IncludeNumbers && passwordModel.IncludeLowerCase && passwordModel.IncludeSymbols)
            {
                chars = "";
                chars += "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_+=.,";
            }

            //Todas las Opciones 4 en Total
            if (passwordModel.IncludeNumbers && passwordModel.IncludeUpperCase && passwordModel.IncludeLowerCase && passwordModel.IncludeSymbols)
            {
                chars = "";
                chars += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_+=.,";
            }

            if (passwordModel.IncludeAll)
            {
                chars = "";
                chars += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_+=.,";
            }



           


            StringBuilder sb = new StringBuilder();
            Random rdn = new Random();

            for (int i = 0; i < passwordModel.PasswordLength; i++)
            {
                
                sb.Append(chars[rdn.Next(chars.Length)]);
            }

            return sb.ToString();


          
        }
    }
}
