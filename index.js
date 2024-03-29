#! /usr/bin/env node
import { program } from 'commander'
import init from './commands/init'
import { config } from './commands/config'
import { signMsg } from './commands/wallet'
import { reset } from './commands/reset'
import key from './commands/key'
import { getAccounts } from './commands/accounts'
import { searchTxs } from './commands/tx'

program.command('key').description('Get your Key').action(key)

program.command('init').description('Set up Storm').action(init)

program
  .command('reset')
  .description('Reset your Storm Key & settings')
  .action(reset)

program.command('config').description('Configure Storm').action(config)

program
  .command('sign')
  .description('Sign a message from one of your Stacks accounts')
  .action(signMsg)

program
  .command('accounts')
  .description('Find one of your Stacks accounts')
  .action(getAccounts)

program
  .command('tx search')
  .description('Search your Stacks accounts for transactions')
  .action(searchTxs)

program.parse()
