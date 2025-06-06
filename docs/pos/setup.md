---
---

import posSetup1 from '../../static/img/pos/pos-setup-1.png';
import posSetup2 from '../../static/img/pos/pos-setup-2.png';
import posSetup3 from '../../static/img/pos/pos-setup-3.png';

# Setting up ZEUS point of sale (Square)

Currently the ZEUS point of sale only supports merchants who process their payments with Square.

## Accessing the Point of Sale Settings

The Point of Sale section can be found in the Settings view. Navigate to Settings, and you will see the Point of Sale section.

<img src={posSetup2} style={{width: 400}} />

Note to proceed to POS settings, you must have a fiat currency set. This currency must match the currency used on your Square Terminal or you will have reconciliation problems.

## Point of Sale settings overview

Two fields are required to connect to your Square terminal: Square Access token and Square Location ID.

To get your Access token follow the instructions in the section here labeled [Get a personal access token](https://developer.squareup.com/docs/build-basics/access-tokens#get-a-personal-access-token)

To get your Location ID, visit the Square developer dashboard, and retrieve your location ID from the tab labeled `Locations`. It's a 13 character alphanumeric all-caps string.

<img src={posSetup3} style={{width: 400}} />

**Merchant name**: This optional, but adds your merchant to the memo on your Lightning invoice memos.

**Confirmation preferences**: As a merchant you have the option to select '0-conf' or '1-conf' for on-chain payment confirmation, or disable them entirely by selecting 'LN only'.

**Disable tips**: ZEUS can prompt the user to leave a tip (it can even be denominated in the currency of the user's choosing) but you may want to disable tips. Tips marked in ZEUS _cannot_ be reconciled back to the Square terminal. Merchants that don't want the extra reconciliation work can disable tips in ZEUS and adds tip or auto-gratuity as a line item on the Square terminal.

**Developer mode**: Toggle this is you are testing against Square's sandbox.
