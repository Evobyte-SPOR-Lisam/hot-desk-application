﻿using System;
namespace HotDeskApplicationApi.Models.Security
{
	public class RegisterModel
	{
        public string FirstName { get; set; } = default!;

        public string LastName { get; set; } = default!;

        public string Email { get; set; } = default!;

        public string Password { get; set; } = default!;
    }
}

