using System;

namespace GettingInput
{
  class Program
  {
    static void Main()
    {
      // The next three lines of code take the input of the user and show it back to the user
      Console.WriteLine("How old are you?");
      string input = Console.ReadLine();
      Console.WriteLine($"You are {input} years old!");
    }
  }
}
