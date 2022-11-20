using Microsoft.EntityFrameworkCore;

namespace AryBuchhandlungAPI.Daten
{
    public class DatenKontext:DbContext
    {
        public DatenKontext(DbContextOptions<DatenKontext> options) : base(options) { }
        public DbSet<AryBuch> AryBücher => Set<AryBuch>();
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AryBuch>().Property(b => b.Preis).HasPrecision(18, 2);
            base.OnModelCreating(modelBuilder);
        }
    }
}
