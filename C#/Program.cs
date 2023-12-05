
class MathProgram
{
    static void Main()
    {
        Console.WriteLine("Welcome to my Math Program\n\nVersion 0.1");
        StartProgram();
    }

    static void StartProgram()
    {
        Console.WriteLine("Please enter the first number (up to 5 digits):");
        string? inputOne = Console.ReadLine();

        if (!IsInteger(inputOne))
        {
            Console.WriteLine("Please, only a whole number above 0.");
            StartProgram();
            return;
        }

        int topNumber = int.Parse(inputOne);

        Console.WriteLine("Enter the second number (up to 5 digits):");
        string? inputTwo = Console.ReadLine();

        if (!IsInteger(inputTwo))
        {
            Console.WriteLine("Please, only a whole number above 0.");
            StartProgram();
        }

        int bottomNumber = int.Parse(inputTwo);

        Console.WriteLine("Choose your operation.");
        Console.WriteLine("add = +, subtract = -, multiply = *, division = /");

        Console.WriteLine("Choose your operation: ");
        string? userOperator = Console.ReadLine();

        int answer = 0;

        Console.WriteLine("topNumber", topNumber.GetType(), "bottomNumber", bottomNumber.GetType());
        switch (userOperator)
        {
            case "+":
                answer = topNumber + bottomNumber;
                break;
            case "-":
                answer = topNumber - bottomNumber;
                break;
            case "*":
                answer = topNumber * bottomNumber;
                break;
            case "/":
                if (topNumber != 0 || bottomNumber != 0)
                {
                    answer = topNumber / bottomNumber;
                }
                else
                {
                    Console.WriteLine("Dividing by zero will always be zero (0)");
                    StartProgram();
                }
                break;
            default:
                Console.WriteLine("Please choose a valid operation.");
                break;
        }
        Console.WriteLine($"You have chosen:\n {topNumber} {userOperator} {bottomNumber}");
        Console.WriteLine("Enter your answer:");
        string dirtyAnswer = Console.ReadLine();
        int userAnswer = int.Parse(dirtyAnswer);
        if (userAnswer != answer)
        {
            Console.WriteLine("Incorrect");
        }
        else
        {
            Console.WriteLine("Correct");
        }

        Console.Write("Do you want to play again? (y/n): ");
        string repeat = Console.ReadLine();

        if (repeat?.ToLower() == "y")
        {
            StartProgram();
        }
        else
        {
            Environment.Exit(0);
        }

    }
    static bool IsInteger(string input)
    {
        return int.TryParse(input, out _);

    }

}

