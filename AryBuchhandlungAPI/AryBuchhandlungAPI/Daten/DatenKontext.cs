using Microsoft.EntityFrameworkCore;
using System.Runtime.Intrinsics.X86;

namespace AryBuchhandlungAPI.Daten
{
    public class DatenKontext:DbContext
    {
        public DatenKontext(DbContextOptions<DatenKontext> options) : base(options) { }
        public DbSet<AryBuch> AryBücher => Set<AryBuch>();
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AryBuch>().Property(b => b.Preis).HasPrecision(18, 2);

            modelBuilder.Entity<AryBuch>().HasData(
                new AryBuch
                {
                    Name = "Aspekte Neu B1",
                    Niveau = "B1",
                    Preis = 29.99m
                },
                new AryBuch
                {
                    Name = "Aspekte Neu B2",
                    Niveau = "B2",
                    Preis = 39.99m
                },
                new AryBuch
                {
                    Name = "Aspekte Neu C1",
                    Niveau = "C1",
                    Preis = 49.99m
                });
            base.OnModelCreating(modelBuilder);
        }
    }
}
