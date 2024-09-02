import requests

# Your API key from the website
api_key = 'ae18d4e25244661192fa44f0baa8c537'

# API endpoint (for CoinMarketCap)
url = 'http://api.coinlayer.com/live'

params = {
    'access_key': api_key
}

# Make a request to the API
response = requests.get(url, params=params)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()  # Convert the response to a JSON object
    if data['success']:
        # Print the rates
        print("Cryptocurrency Rates:")
        for symbol, rate in data['rates'].items():
            print(f"{symbol}: {rate}")
    else:
        print("Error fetching data:", data.get('error', 'Unknown Error'))
else:
    print("HTTP Request Failed:", response.status_code)