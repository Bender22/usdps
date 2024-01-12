'use client'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem
} from '@nextui-org/navbar'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react'
import { Button } from '@nextui-org/button'
import { Kbd } from '@nextui-org/kbd'
import { Link } from '@nextui-org/link'
import { Input } from '@nextui-org/input'

import { link as linkStyles } from '@nextui-org/theme'

import { siteConfig } from '@/config/site'
import NextLink from 'next/link'
import clsx from 'clsx'

import { ThemeSwitch } from '@/components/theme-switch'
import {
  GithubIcon,
  HeartFilledIcon,
  ChevronDown,
  SearchIcon,
  Logo
} from '@/components/icons'
import { useMemo, useState } from 'react'

export const Navbar = () => {
  const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
			  inputWrapper: 'bg-default-100',
			  input: 'text-sm'
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={['command']}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
  )

  const [selectedKeys, setSelectedKeys] = useState(new Set(['The Beasts of Northrend']))

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('-', ' '),
    [selectedKeys]
  )
  return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">US Stadistic</p>
					</NextLink>
				</NavbarBrand>
				 {/* <ul className="hidden lg:flex gap-4 justify-start ml-2"> */}
					{/* {siteConfig.navItems.map((item) => ( */}
						<NavbarItem key={siteConfig.navItems[0].href}>
							<NextLink
								className={clsx(
								  linkStyles({ color: 'foreground' }),
								  'data-[active=true]:text-primary data-[active=true]:font-medium'
								)}
								color="foreground"
								href={siteConfig.navItems[0].href}
							>
								{siteConfig.navItems[0].label}
							</NextLink>
						</NavbarItem>
					{/* ))} */}
				 {/* </ul> */}
				<Dropdown>
					<DropdownTrigger>
						{/* <Button */}
						{/*	variant="bordered" */}
						{/*	className="capitalize" */}
						{/* > */}
						{/*	*/}
						{/* </Button> */}
						<Button
							disableRipple
							className="p-0 bg-transparent data-[hover=true]:bg-transparent"
							endContent={<ChevronDown fill="currentColor" size={16} />}
							radius="sm"
							variant="light"
						>
							Trial of the Crusader
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						aria-label={'boses'}
						variant="flat"
						disallowEmptySelection
						selectionMode="none"

					>
						<DropdownItem key="The-Beasts-of-Northrend" href={'/docs/The-Beasts-of-Northrend'}>The Beasts of Northrend</DropdownItem>
						<DropdownItem key="Lord-Jaraxxus" href={'/docs/Lord-Jaraxxus'}>Lord Jaraxxus</DropdownItem>
						<DropdownItem key="Faction-Champions" href={'/docs/Faction-Champions'}>Faction Champions</DropdownItem>
						<DropdownItem key="Twin-Val'kyr" href={'/docs/Twin-Val\'kyr'}>Twin Val&apos;kyr</DropdownItem>
						<DropdownItem key="Anub'arak" href={'/docs/Anub\'arak'}>Anuba&apos;arak</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">

					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden md:flex">

				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
									  ? 'primary'
									  : index === siteConfig.navMenuItems.length - 1
									    ? 'danger'
									    : 'foreground'
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
  )
}
