function Calc()
{
    switch (action)
    {
        case Operations.Add:
            result = Number(value1) + Number(value2);
            out.innerText = result;
            return result;
            ResultProcessing();
            break;
        case Operations.Subtraction:
            result = value1 - value2;
            out.innerText = result;
            return result;
            ResultProcessing();
            break;
        case Operations.Multi:
            result = value1 * value2;
            out.innerText = result;
            return result;
            ResultProcessing();
            break;
        case Operations.Division:
            result = Number(value1) / Number(value2);
            out.innerText = result;
            return result;
            ResultProcessing();
            break;
    }
}