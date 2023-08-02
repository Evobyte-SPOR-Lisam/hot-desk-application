﻿// <auto-generated />
using System;
using HotDeskApplicationApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace HotDeskApplicationApi.Migrations
{
    [DbContext(typeof(HotDeskDbContext))]
    partial class HotDeskDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("HotDeskApplicationApi.Models.Desk", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("FloorID")
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<Guid>("OfficeID")
                        .HasColumnType("uuid");

                    b.HasKey("ID");

                    b.ToTable("Desks");

                    b.HasData(
                        new
                        {
                            ID = new Guid("5b433aec-54ea-4e04-9447-4d65c47f4bf8"),
                            FloorID = new Guid("37bb197b-7d02-4c81-a4b1-fce0e4d06f83"),
                            Name = "PP1",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("926c8afd-ee70-4372-add5-6320ab116f5f"),
                            FloorID = new Guid("37bb197b-7d02-4c81-a4b1-fce0e4d06f83"),
                            Name = "PP2",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("df83c7c0-c202-4d9e-8005-cb3296439781"),
                            FloorID = new Guid("37bb197b-7d02-4c81-a4b1-fce0e4d06f83"),
                            Name = "PP3",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("d70df64b-6e1a-4b69-8cdb-df279c48b2b7"),
                            FloorID = new Guid("37bb197b-7d02-4c81-a4b1-fce0e4d06f83"),
                            Name = "PP4",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("8ff579a9-1016-4ee0-8ae9-3fe6915e0a48"),
                            FloorID = new Guid("37bb197b-7d02-4c81-a4b1-fce0e4d06f83"),
                            Name = "PP5",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("72ae4345-2cde-4e22-a09d-944499f47163"),
                            FloorID = new Guid("6da51987-fee8-4804-98fd-6945051172bd"),
                            Name = "PE11",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("61a6a913-df3b-454c-9dde-230b60ea058c"),
                            FloorID = new Guid("6da51987-fee8-4804-98fd-6945051172bd"),
                            Name = "PE12",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("4dc84b09-95fd-4f90-9025-2255712f31f2"),
                            FloorID = new Guid("6da51987-fee8-4804-98fd-6945051172bd"),
                            Name = "PE13",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("bac4da7a-2b44-4ff1-b37e-bc62e4791462"),
                            FloorID = new Guid("6da51987-fee8-4804-98fd-6945051172bd"),
                            Name = "PE14",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("293d81c0-b316-4fde-8ba4-aeb71725c9d8"),
                            FloorID = new Guid("8d57830b-0090-4b5b-aeea-a72197d8a250"),
                            Name = "PE21",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("3393eb3c-7a39-4da9-91cc-23efdfc2b27c"),
                            FloorID = new Guid("8d57830b-0090-4b5b-aeea-a72197d8a250"),
                            Name = "PE22",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("3f2f7b67-5cce-4338-8a52-2d33210ac4f2"),
                            FloorID = new Guid("8d57830b-0090-4b5b-aeea-a72197d8a250"),
                            Name = "PE23",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("0a05ed78-d5f4-4bb4-a100-ff85cc54b9f7"),
                            FloorID = new Guid("8d57830b-0090-4b5b-aeea-a72197d8a250"),
                            Name = "PE24",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("07acf76c-87e8-4db0-9bd9-c0a93ce5dc8c"),
                            FloorID = new Guid("55529eb0-d278-4681-80fe-41c7e738d7a5"),
                            Name = "BE13",
                            OfficeID = new Guid("dd02e05a-449d-4438-b84a-2cdee7b5069e")
                        },
                        new
                        {
                            ID = new Guid("6307efad-0ea0-4342-99d4-402d67180319"),
                            FloorID = new Guid("55529eb0-d278-4681-80fe-41c7e738d7a5"),
                            Name = "BE14",
                            OfficeID = new Guid("dd02e05a-449d-4438-b84a-2cdee7b5069e")
                        },
                        new
                        {
                            ID = new Guid("85b363a3-c052-4ba2-a466-0e9f6d485248"),
                            FloorID = new Guid("85f71447-fddc-4dc3-acdf-2c4c15de0a19"),
                            Name = "BE21",
                            OfficeID = new Guid("dd02e05a-449d-4438-b84a-2cdee7b5069e")
                        },
                        new
                        {
                            ID = new Guid("2704c4eb-dffa-4c34-9908-efa5c003ac8d"),
                            FloorID = new Guid("85f71447-fddc-4dc3-acdf-2c4c15de0a19"),
                            Name = "BE22",
                            OfficeID = new Guid("dd02e05a-449d-4438-b84a-2cdee7b5069e")
                        },
                        new
                        {
                            ID = new Guid("9395c4b8-ca8a-4e74-a725-5ffc4c50c12e"),
                            FloorID = new Guid("85f71447-fddc-4dc3-acdf-2c4c15de0a19"),
                            Name = "BE23",
                            OfficeID = new Guid("dd02e05a-449d-4438-b84a-2cdee7b5069e")
                        },
                        new
                        {
                            ID = new Guid("a220de6a-f999-45a4-ae28-a503aa49f9ea"),
                            FloorID = new Guid("85f71447-fddc-4dc3-acdf-2c4c15de0a19"),
                            Name = "BE24",
                            OfficeID = new Guid("dd02e05a-449d-4438-b84a-2cdee7b5069e")
                        });
                });

            modelBuilder.Entity("HotDeskApplicationApi.Models.Floor", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<Guid>("OfficeID")
                        .HasColumnType("uuid");

                    b.HasKey("ID");

                    b.ToTable("Floors");

                    b.HasData(
                        new
                        {
                            ID = new Guid("37bb197b-7d02-4c81-a4b1-fce0e4d06f83"),
                            Name = "Ground Floor",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("6da51987-fee8-4804-98fd-6945051172bd"),
                            Name = "Floor 1",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("8d57830b-0090-4b5b-aeea-a72197d8a250"),
                            Name = "Floor 2",
                            OfficeID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5")
                        },
                        new
                        {
                            ID = new Guid("55529eb0-d278-4681-80fe-41c7e738d7a5"),
                            Name = "Floor 1",
                            OfficeID = new Guid("dd02e05a-449d-4438-b84a-2cdee7b5069e")
                        },
                        new
                        {
                            ID = new Guid("85f71447-fddc-4dc3-acdf-2c4c15de0a19"),
                            Name = "Floor 2",
                            OfficeID = new Guid("dd02e05a-449d-4438-b84a-2cdee7b5069e")
                        });
                });

            modelBuilder.Entity("HotDeskApplicationApi.Models.Office", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.ToTable("Offices");

                    b.HasData(
                        new
                        {
                            ID = new Guid("006e9d57-99d2-40b2-b0e1-db7197b226d5"),
                            Name = "Predeal"
                        },
                        new
                        {
                            ID = new Guid("dd02e05a-449d-4438-b84a-2cdee7b5069e"),
                            Name = "Brizei"
                        });
                });

            modelBuilder.Entity("HotDeskApplicationApi.Models.Profile", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<byte[]>("Avatar")
                        .HasColumnType("bytea");

                    b.Property<string>("EmailAddress")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .HasColumnType("text");

                    b.Property<bool>("IsAdmin")
                        .HasColumnType("boolean");

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.Property<string>("NickName")
                        .HasColumnType("text");

                    b.Property<string>("Role")
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.ToTable("Profile");
                });

            modelBuilder.Entity("HotDeskApplicationApi.Models.Reservation", b =>
                {
                    b.Property<Guid>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("ArrivalTime")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("DeskID")
                        .HasColumnType("uuid");

                    b.Property<Guid>("FloorID")
                        .HasColumnType("uuid");

                    b.Property<DateTime>("LeavingTime")
                        .HasColumnType("timestamp with time zone");

                    b.Property<Guid>("OfficeID")
                        .HasColumnType("uuid");

                    b.Property<string>("ProfileEmail")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.ToTable("Reservations");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex");

                    b.ToTable("AspNetRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("integer");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("boolean");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("boolean");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("text");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("text");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("boolean");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("text");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("boolean");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("character varying(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex");

                    b.ToTable("AspNetUsers", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("text");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("text");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("RoleId")
                        .HasColumnType("text");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Value")
                        .HasColumnType("text");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
