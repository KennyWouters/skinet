using System.ComponentModel.DataAnnotations;

namespace skinet.DTOs;

public class CreateProductDto
{
    [Required]
    public string Name { get; set; } = String.Empty;
    
    [Required]
    public string Description { get; set; } = String.Empty;
    
    [Range(0.01, Double.MaxValue, ErrorMessage = "price must be greater than zero")]
    public decimal Price { get; set; }
    
    [Required]
    public string PictureUrl { get; set; } = String.Empty;
    
    [Required]
    public string  Type { get; set; } =  String.Empty;
    
    [Required]
    public string Brand { get; set; } = String.Empty;
    
    [Range(1, int.MaxValue, ErrorMessage = "Quantity must be at least 1")]
    public int QuantityInStock { get; set; }
}