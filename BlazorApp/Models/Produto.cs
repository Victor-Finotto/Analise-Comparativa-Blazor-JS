namespace BlazorApp.Models
{
    public class Produto
    {
        public int Id { get; set; }
        public string Nome { get; set; } = "";
        public string Categoria { get; set; } = "";
        public decimal Preco { get; set; }
        public string Status { get; set; } = "";
        public bool Selecionado { get; set; } = false;
    }
}
