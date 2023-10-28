using GeneradorDeContrasenas.Validaciones;
using System.ComponentModel.DataAnnotations;
using System.Xml.Linq;

namespace GeneradorDeContrasenas.Models
{
    public class PasswordModel
    {
        [Display(Name = "Password Size ")]
        
        public int PasswordLength { get; set; }
        public string GeneratedPassword { get; set; }
        [Display(Name ="Mayuscula")]
        public bool IncludeUpperCase { get; set; }
        [Display(Name ="Numeros")]
        public bool IncludeNumbers { get; set; }
        [Display(Name ="Todo")]
        public bool IncludeAll { get; set; }
        [Display(Name ="Minusculas")]
        public bool IncludeLowerCase { get; set; }
        [Display(Name ="Synbolos")]
        public bool IncludeSymbols { get; set; }

    }
}
