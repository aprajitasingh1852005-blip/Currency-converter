async function convert() {
  const amount = document.getElementById('amount').value;
  const from   = document.getElementById('from').value;
  const to     = document.getElementById('to').value;

  document.getElementById('result').innerText = 'Loading...';
  document.getElementById('error').innerText  = '';

  try {
    const res  = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
    const data = await res.json();
    document.getElementById('result').innerText = `${amount} ${from} = ${data.rates[to]} ${to}`;
  } catch {
    document.getElementById('error').innerText = 'Something went wrong. Check your connection.';
    document.getElementById('result').innerText = '';
  }
}