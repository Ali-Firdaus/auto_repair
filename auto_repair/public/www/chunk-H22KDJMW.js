import{a as h}from"./chunk-MNUV5YXZ.js";import"./chunk-C5QOWERU.js";import"./chunk-4Q62TP3N.js";import"./chunk-QUJFQN2Y.js";import"./chunk-XTYX2PQX.js";import"./chunk-U5DR2SWR.js";import"./chunk-YYNEKXLB.js";import"./chunk-PKG65ASR.js";import"./chunk-X6PMFJLW.js";import"./chunk-KLJZLNNC.js";import"./chunk-UJQJIIIF.js";import"./chunk-52YGQM6B.js";import"./chunk-LVZUJY53.js";import"./chunk-CKP3SGE2.js";import"./chunk-5FMQEESI.js";import"./chunk-QDAM5VGR.js";import"./chunk-X2MKGMXO.js";import"./chunk-MTHZ7MWU.js";import"./chunk-WI5MSH4N.js";import"./chunk-BWXWOEJ4.js";import"./chunk-WOTK2GD3.js";import{ca as y,ea as f,ma as g}from"./chunk-WNXOGUEI.js";import{j as u}from"./chunk-3IPPZ7PB.js";import"./chunk-Q3JIPZMN.js";import{Kb as n,Lb as o,Mb as p,Oc as d,da as r,kb as c,lc as l,xa as m}from"./chunk-QLJOQDBP.js";import"./chunk-XY4JVPMI.js";import"./chunk-3A2TMJPV.js";import"./chunk-FK6H3RFT.js";import"./chunk-4LAIL3YS.js";import"./chunk-3VUJARFJ.js";import"./chunk-U4S3RQJB.js";import"./chunk-TFAIVKUR.js";import"./chunk-YUNOCBLG.js";import"./chunk-YJ5TA4PT.js";import"./chunk-2NIBOUWM.js";import"./chunk-I547WOKC.js";import"./chunk-NRC4DAUY.js";import"./chunk-OWRIGUTI.js";import"./chunk-NMFL75IO.js";import"./chunk-FIRXXYNY.js";var C=(()=>{class a{constructor(){this.crudStore=r(h),this.router=r(u),this.si6_accounting_data={name:"si6_accounting_data",script_type:"API",api_method:"si6_accounting_data",script:`
      # Frappe Server Script \u2014 API Type
# Method Name: si6_accounting_data
# Endpoint: GET /api/method/si6_accounting_data
#
# Batches all AccountingStore onInit queries into one round-trip.
# Replaces ~5 calls: fiscal years, accounts, tax template,
# modes of payment (N+1 eliminated), payment terms.

# ------------------------------------------------------------------
# Company name (needed for account filter)
# ------------------------------------------------------------------
companies = frappe.get_list("Company", fields=["name"], limit=1)
company_name = companies[0].name if companies else None

# ------------------------------------------------------------------
# Fiscal Years
# ------------------------------------------------------------------
fiscal_years = frappe.get_list(
    "Fiscal Year",
    fields=["name", "year", "year_start_date", "year_end_date"],
    order_by="creation asc",
    limit=1000,
)

# ------------------------------------------------------------------
# Chart of Accounts for this company
# ------------------------------------------------------------------
account_fields = [
    "name", "owner", "creation", "modified", "modified_by", "docstatus",
    "disabled", "account_name", "account_number", "is_group", "company",
    "root_type", "report_type", "account_currency", "parent_account",
    "account_type", "tax_rate", "freeze_account", "balance_must_be",
    "lft", "rgt", "include_in_gross",
]
accounts = []
if company_name:
    accounts = frappe.get_list(
        "Account",
        filters=[["company", "=", company_name]],
        fields=account_fields,
        order_by="account_name asc",
        limit=1000,
    )

# ------------------------------------------------------------------
# Item Tax Template (first one \u2014 single template setups)
# ------------------------------------------------------------------
template_list = frappe.get_list(
    "Item Tax Template",
    fields=["name", "title"],
    limit=1,
)
item_tax_template = (
    frappe.get_doc("Item Tax Template", template_list[0].name).as_dict()
    if template_list
    else None
)

# ------------------------------------------------------------------
# Modes of Payment \u2014 full docs to include \`accounts\` child table
# (eliminates the original list \u2192 N\xD7getDoc N+1 pattern)
# ------------------------------------------------------------------
mop_names = frappe.get_list(
    "Mode of Payment",
    fields=["name"],
    order_by="mode_of_payment asc",
    limit=10,
)
modes_of_payment = [
    frappe.get_doc("Mode of Payment", mop.name).as_dict()
    for mop in mop_names
]

# ------------------------------------------------------------------
# Payment Terms
# ------------------------------------------------------------------
payment_term_fields = [
    "name", "owner", "creation", "modified", "modified_by", "docstatus",
    "payment_term_name", "invoice_portion", "due_date_based_on",
    "credit_days", "credit_months", "discount_type", "discount",
    "discount_validity_based_on", "discount_validity",
]
payment_terms = frappe.get_list(
    "Payment Term",
    fields=payment_term_fields,
    order_by="creation asc",
    limit=1000,
)

frappe.response["message"] = {
    "fiscal_years": fiscal_years,
    "accounts": accounts,
    "item_tax_template": item_tax_template,
    "modes_of_payment": modes_of_payment,
    "payment_terms": payment_terms,
}

    `},this.si6_app_bootstrap={name:"si6_app_bootstrap",script_type:"API",api_method:"si6_app_bootstrap",script:`
# Frappe Server Script \u2014 API Type
# Method Name: si6_app_bootstrap
# Endpoint: GET /api/method/si6_app_bootstrap
#
# Batches all auth + company startup queries into one round-trip.
# Replaces ~12 calls made by AuthStore.onInit and CompanyStore.onInit
# (including the duplicate loadCompany() bug in CompanyStore).

user_id = frappe.session.user

# ------------------------------------------------------------------
# Users list (for admin user management UI)
# ------------------------------------------------------------------
users = frappe.get_list(
    "User",
    fields=["name", "email", "first_name", "full_name", "username",
            "mobile_no", "location", "user_image", "user_type"],
    order_by="full_name asc",
    limit=10000,
)

# ------------------------------------------------------------------
# Current user \u2014 full doc via get_doc for all fields
# ------------------------------------------------------------------
current_user = frappe.get_doc("User", user_id).as_dict()

# ------------------------------------------------------------------
# ERPNext built-in roles
# ------------------------------------------------------------------
erpnext_roles = frappe.get_list(
    "Role",
    fields=["role_name"],
    order_by="modified desc",
    limit=10000,
)

# ------------------------------------------------------------------
# All Si6 Permission docs with child tables (views, systems, operations)
# ------------------------------------------------------------------
permissions_names = frappe.get_list(
    "Permissions",
    fields=["name"],
    order_by="name asc",
    limit=10000,
)
si6_roles = [
    frappe.get_doc("Permissions", p.name).as_dict()
    for p in permissions_names
]

# ------------------------------------------------------------------
# Company
# ------------------------------------------------------------------
company_fields = [
    "name", "company_name", "domain", "abbr", "default_currency", "country",
    "sales_monthly_history", "company_logo", "tax_id", "company_description",
    "email", "phone_no",
]
companies = frappe.get_list("Company", fields=company_fields, limit=1)
company = companies[0] if companies else None

# ------------------------------------------------------------------
# Global Defaults
# ------------------------------------------------------------------
global_defaults = frappe.db.get_value(
    "Global Defaults",
    "Global Defaults",
    ["name", "default_company", "country", "disable_rounded_total"],
    as_dict=True,
)

# ------------------------------------------------------------------
# Company file attachments: logo, brand (domain), stamp (company_name)
# ------------------------------------------------------------------
logo_url = None
brand_url = None
stamp_url = None

if company:
    logo_file = frappe.get_list(
        "File",
        filters=[
            ["attached_to_doctype", "=", "Company"],
            ["attached_to_name", "=", company.name],
            ["attached_to_field", "=", "company_logo"],
        ],
        fields=["file_url"],
        limit=1,
    )
    logo_url = logo_file[0].file_url if logo_file else None

    brand_file = frappe.get_list(
        "File",
        filters=[
            ["attached_to_doctype", "=", "Company"],
            ["attached_to_name", "=", company.name],
            ["attached_to_field", "=", "domain"],
        ],
        fields=["file_url"],
        limit=1,
    )
    brand_url = brand_file[0].file_url if brand_file else None

    stamp_file = frappe.get_list(
        "File",
        filters=[
            ["attached_to_doctype", "=", "Company"],
            ["attached_to_name", "=", company.name],
            ["attached_to_field", "=", "company_name"],
        ],
        fields=["file_url"],
        limit=1,
    )
    stamp_url = stamp_file[0].file_url if stamp_file else None

# ------------------------------------------------------------------
# Custom subscription package
# ------------------------------------------------------------------
packages = frappe.get_list(
    "Package",
    filters=[["package_name", "=", "Custom"]],
    fields=["name", "package_name", "readme"],
    limit=1,
)
subscription_package = packages[0] if packages else None

frappe.response["message"] = {
    "users": users,
    "current_user": current_user,
    "erpnext_roles": erpnext_roles,
    "si6_roles": si6_roles,
    "company": company,
    "global_defaults": global_defaults,
    "logo_url": logo_url,
    "brand_url": brand_url,
    "stamp_url": stamp_url,
    "subscription_package": subscription_package,
}
    `},this.si6_guard_context={name:"si6_guard_context",script_type:"API",api_method:"si6_guard_context",script:`
# Frappe Server Script \u2014 API Type
# Method Name: si6_guard_context
# Endpoint: GET /api/method/si6_guard_context
#
# Batches all guard queries into one network round-trip.
# Replaces ~16 individual calls made by subscriptionGuard,
# initializationGuard, authorizationGuard, and settingsGuard.

user_id = frappe.session.user

# ------------------------------------------------------------------
# Current user (location field holds the Si6 role name)
# ------------------------------------------------------------------
user = frappe.db.get_value(
    "User",
    user_id,
    ["name", "email", "first_name", "full_name", "username",
     "mobile_no", "location", "user_image", "user_type"],
    as_dict=True,
) or {}
role = user.get("location") or "guest"

# ------------------------------------------------------------------
# Si6 Permission doc for this role (includes views child table)
# ------------------------------------------------------------------
permissions_list = frappe.get_list(
    "Permissions",
    filters=[["role", "=", role]],
    fields=["name"],
    limit=1,
)
permission = (
    frappe.get_doc("Permissions", permissions_list[0].name).as_dict()
    if permissions_list
    else None
)

# ------------------------------------------------------------------
# Company (first company \u2014 single-company setups)
# ------------------------------------------------------------------
companies = frappe.get_list(
    "Company",
    fields=["name", "company_name", "abbr", "default_currency", "country",
            "sales_monthly_history", "company_logo", "tax_id",
            "company_description", "email", "phone_no", "domain"],
    limit=1,
)
company = companies[0] if companies else None

# ------------------------------------------------------------------
# Custom subscription package
# ------------------------------------------------------------------
packages = frappe.get_list(
    "Package",
    filters=[["package_name", "=", "Custom"]],
    fields=["name", "package_name", "readme"],
    limit=1,
)
subscription_package = packages[0] if packages else None

# ------------------------------------------------------------------
# Account setup checks (Tax, Bank, Petty Cash)
# ------------------------------------------------------------------
tax_account = frappe.get_list(
    "Account",
    filters=[["account_type", "=", "Tax"], ["is_group", "=", 0]],
    fields=["name"],
    limit=1,
)
bank_account = frappe.get_list(
    "Account",
    filters=[["account_type", "=", "Bank"], ["is_group", "=", 0]],
    fields=["name"],
    limit=1,
)
petty_cash = frappe.get_list(
    "Account",
    filters=[["account_type", "=", "Cash"], ["account_name", "=", "Petty Cash"]],
    fields=["name"],
    limit=1,
)

frappe.response["message"] = {
    "user": user,
    "role": role,
    "permission": permission,
    "company": company,
    "subscription_package": subscription_package,
    "tax_account_found": len(tax_account) > 0,
    "bank_account_found": len(bank_account) > 0,
    "petty_cash_account_found": len(petty_cash) > 0,
}
    `},this.si6_portal_data={name:"si6_portal_data",script_type:"API",api_method:"si6_portal_data",script:`
# Frappe Server Script \u2014 API Type
# Method Name: si6_portal_data
# Endpoint: GET /api/method/si6_portal_data
#
# Batches all PortalStore onInit queries into one round-trip.
# Replaces ~21 calls (7 methods \xD7 getLoggedInUser + getDoc(User) + query).
# Notes N+1 is eliminated: frappe.get_all returns full content server-side.

user_id = frappe.session.user

# ------------------------------------------------------------------
# Resolve employee and department for the current user
# ------------------------------------------------------------------
employee_fields = [
    "name", "employee", "first_name", "last_name", "employee_name",
    "department", "image", "gender", "status", "employee_number",
    "date_of_birth", "date_of_joining", "bank_name",
    "scheduled_confirmation_date", "contract_end_date", "designation",
    "cell_number", "ctc", "bank_ac_no", "user_id",
]
employees_found = frappe.get_list(
    "Employee",
    filters=[["user_id", "=", user_id]],
    fields=employee_fields,
    limit=1,
)
employee_name = employees_found[0].name if employees_found else None
employee_department = employees_found[0].department if employees_found else None

# ------------------------------------------------------------------
# Task fields
# ------------------------------------------------------------------
task_fields = [
    "name", "creation", "modified", "modified_by", "owner", "docstatus",
    "subject", "project", "type", "is_group", "status", "task_weight",
    "parent_task", "completed_by", "completed_on", "exp_start_date",
    "expected_time", "start", "exp_end_date", "progress", "duration",
    "description", "depends_on_tasks", "act_start_date", "actual_time",
    "act_end_date", "department", "company",
]

# ------------------------------------------------------------------
# User's own tasks (owned by user or assigned to their employee record)
# ------------------------------------------------------------------
or_filters_tasks = [["owner", "=", user_id]]
if employee_name:
    or_filters_tasks.append(
        ["description", "like", f'%"employee":"{employee_name}"%']
    )

tasks = frappe.get_list(
    "Task",
    filters=[["status", "!=", "Cancelled"]],
    or_filters=or_filters_tasks,
    fields=task_fields,
    order_by="creation desc",
    limit=10000,
)

# ------------------------------------------------------------------
# Department tasks
# ------------------------------------------------------------------
department_tasks = []
if employee_department:
    department_tasks = frappe.get_list(
        "Task",
        filters=[["status", "!=", "Cancelled"]],
        or_filters=[
            ["department", "=", employee_department],
            ["description", "like", f'%"department":"{employee_department}"%'],
        ],
        fields=task_fields,
        order_by="creation desc",
        limit=10000,
    )

# ------------------------------------------------------------------
# Project fields
# ------------------------------------------------------------------
project_fields = [
    "name", "creation", "modified", "modified_by", "owner", "docstatus",
    "naming_series", "project_name", "status", "project_type", "is_active",
    "percent_complete", "project_template", "expected_start_date",
    "expected_end_date", "priority", "department", "customer", "sales_order",
    "notes", "actual_start_date", "actual_time", "actual_end_date",
    "estimated_costing", "total_costing_amount", "total_purchase_cost",
    "company", "total_sales_amount", "total_billable_amount",
    "total_billed_amount", "total_consumed_material_cost", "cost_center",
    "gross_margin", "per_gross_margin", "frequency", "from_time", "to_time",
]

# ------------------------------------------------------------------
# Jobs (Project type = Job, not completed/cancelled, owned by user)
# ------------------------------------------------------------------
jobs = frappe.get_list(
    "Project",
    filters=[
        ["owner", "=", user_id],
        ["project_type", "=", "Job"],
        ["status", "!=", "Completed"],
        ["status", "!=", "Cancelled"],
    ],
    fields=project_fields,
    order_by="creation desc",
    limit=10000,
)

# ------------------------------------------------------------------
# Projects (Project type = Project, not completed/cancelled, owned by user)
# ------------------------------------------------------------------
projects = frappe.get_list(
    "Project",
    filters=[
        ["owner", "=", user_id],
        ["project_type", "=", "Project"],
        ["status", "!=", "Completed"],
        ["status", "!=", "Cancelled"],
    ],
    fields=project_fields,
    order_by="creation desc",
    limit=10000,
)

# ------------------------------------------------------------------
# Quotations
# ------------------------------------------------------------------
quotations = frappe.get_list(
    "Quotation",
    filters=[
        ["owner", "=", user_id],
        ["status", "!=", "Cancelled"],
        ["status", "!=", "Completed"],
    ],
    fields=[
        "name", "owner", "creation", "docstatus", "quotation_to",
        "party_name", "customer_name", "transaction_date", "order_type",
        "total_qty", "total", "net_total", "total_taxes_and_charges",
        "grand_total", "base_discount_amount", "discount_amount", "status",
    ],
    order_by="creation desc",
    limit=10000,
)

# ------------------------------------------------------------------
# Sales Orders
# ------------------------------------------------------------------
sales_orders = frappe.get_list(
    "Sales Order",
    filters=[
        ["owner", "=", user_id],
        ["status", "!=", "Cancelled"],
        ["status", "!=", "Completed"],
    ],
    fields=[
        "name", "owner", "creation", "docstatus", "title", "customer",
        "customer_name", "order_type", "transaction_date", "delivery_date",
        "ignore_pricing_rule", "total_qty", "total", "net_total",
        "grand_total", "status", "delivery_status", "project",
    ],
    order_by="creation desc",
    limit=10000,
)

# ------------------------------------------------------------------
# Notes \u2014 frappe.get_all avoids HTTP truncation of long \`content\` field
# ------------------------------------------------------------------
notes = frappe.get_all(
    "Note",
    fields=["name", "title", "content", "owner", "creation"],
    order_by="creation desc",
    limit=10000,
)

frappe.response["message"] = {
    "tasks": tasks,
    "department_tasks": department_tasks,
    "jobs": jobs,
    "projects": projects,
    "quotations": quotations,
    "sales_orders": sales_orders,
    "notes": notes,
}
    `},this.si6_reference_data={name:"si6_reference_data",script_type:"API",api_method:"si6_reference_data",script:`
# Frappe Server Script \u2014 API Type
# Method Name: si6_reference_data
# Endpoint: GET /api/method/si6_reference_data
#
# Batches all reference-data store queries into one round-trip.
# Replaces ~6 calls made by ItemsListStore, ItemGroupsStore,
# EmployeesStore, and DepartmentsStore onInit hooks.

# ------------------------------------------------------------------
# Items (full list \u2014 stock and service)
# ------------------------------------------------------------------
items = frappe.get_list(
    "Item",
    fields=[
        "name", "item_code", "item_name", "item_group", "stock_uom",
        "sales_uom", "purchase_uom", "is_stock_item", "valuation_rate",
        "standard_rate", "image", "description",
    ],
    order_by="item_name asc",
    limit=100000,
)

# ------------------------------------------------------------------
# Item Groups (category hierarchy)
# ------------------------------------------------------------------
item_groups = frappe.get_list(
    "Item Group",
    fields=["name", "item_group_name", "parent_item_group", "is_group"],
    limit=10000,
)

# ------------------------------------------------------------------
# Units of Measure
# ------------------------------------------------------------------
uoms = frappe.get_list(
    "UOM",
    fields=["creation", "name", "uom_name"],
    order_by="name asc",
    limit=1000,
)

# ------------------------------------------------------------------
# Employees
# ------------------------------------------------------------------
employees = frappe.get_list(
    "Employee",
    fields=[
        "name", "employee", "first_name", "last_name", "employee_name",
        "department", "image", "gender", "status", "employee_number",
        "date_of_birth", "date_of_joining", "bank_name",
        "scheduled_confirmation_date", "contract_end_date", "designation",
        "cell_number", "ctc", "bank_ac_no", "user_id",
    ],
    limit=10000,
)

# ------------------------------------------------------------------
# Departments
# ------------------------------------------------------------------
departments = frappe.get_list(
    "Department",
    fields=["name", "department_name", "parent_department", "is_group", "disabled"],
    limit=1000,
)

frappe.response["message"] = {
    "items": items,
    "item_groups": item_groups,
    "uoms": uoms,
    "employees": employees,
    "departments": departments,
}
    `},this.si6_fetch_required_documents={name:"si6_fetch_required_documents",script_type:"API",api_method:"si6_fetch_required_documents",script:`
# Frappe Server Script \u2014 API Type
# Method Name: si6_fetch_required_documents
# Endpoint: GET /api/method/si6_fetch_required_documents
#
# Checks the existence and counts of all essential ERPNext documents
# managed by the Angular async-utilities sync() pipeline.
# Returns a status dict that the documents-preparation component uses
# to determine which creation steps are still needed.

current_year = frappe.utils.now_datetime().year

# ------------------------------------------------------------------
# Global Defaults
# ------------------------------------------------------------------
global_defaults = frappe.db.get_value(
    "Global Defaults",
    "Global Defaults",
    ["default_currency", "disable_rounded_total"],
    as_dict=True,
) or {}
global_defaults_configured = (
    global_defaults.get("default_currency") == "OMR"
    and global_defaults.get("disable_rounded_total") == 1
)

# ------------------------------------------------------------------
# System Settings
# ------------------------------------------------------------------
system_settings = frappe.db.get_value(
    "System Settings",
    "System Settings",
    ["language", "time_zone"],
    as_dict=True,
) or {}
system_settings_configured = (
    system_settings.get("language") == "en"
    and system_settings.get("time_zone") == "Etc/GMT-4"
)

# ------------------------------------------------------------------
# Fiscal Years \u2014 current year must exist
# ------------------------------------------------------------------
fiscal_year_count = frappe.db.count("Fiscal Year")
current_fiscal_year_exists = frappe.db.exists(
    "Fiscal Year", {"year": str(current_year)}
)

# ------------------------------------------------------------------
# Territories \u2014 beyond the single default "All Territories"
# ------------------------------------------------------------------
territory_count = frappe.db.count("Territory")

# ------------------------------------------------------------------
# Modes of Payment
# ------------------------------------------------------------------
mode_of_payment_count = frappe.db.count("Mode of Payment")
card_mop_exists = frappe.db.exists("Mode of Payment", {"mode_of_payment": "Card"})

# ------------------------------------------------------------------
# Payment Terms
# ------------------------------------------------------------------
payment_term_count = frappe.db.count("Payment Term")
payment_terms_names = frappe.get_list(
    "Payment Term",
    fields=["payment_term_name"],
    limit=1000,
)
payment_term_names_list = [pt.payment_term_name for pt in payment_terms_names]
required_payment_terms = [
    "Advance 25% Payment",
    "Remaining 75% Payment",
    "Full Payment",
]
missing_payment_terms = [
    t for t in required_payment_terms if t not in payment_term_names_list
]

# ------------------------------------------------------------------
# Project Types
# ------------------------------------------------------------------
project_type_count = frappe.db.count("Project Type")
stored_project_types = frappe.get_list(
    "Project Type", fields=["project_type"], limit=100
)
stored_pt_names = [pt.project_type for pt in stored_project_types]
required_project_types = ["Project", "Job", "Manufacture", "Innovation"]
missing_project_types = [t for t in required_project_types if t not in stored_pt_names]

# ------------------------------------------------------------------
# Task Types
# ------------------------------------------------------------------
task_type_count = frappe.db.count("Task Type")
stored_task_types = frappe.get_list("Task Type", fields=["name"], limit=100)
stored_tt_names = [tt.name for tt in stored_task_types]
required_task_types = [
    "Service", "Product", "POA", "Appointment", "Inspection",
    "Task", "Approval", "Meeting", "Payment", "Delivery",
]
missing_task_types = [t for t in required_task_types if t not in stored_tt_names]

# ------------------------------------------------------------------
# Item Groups
# ------------------------------------------------------------------
item_group_count = frappe.db.count("Item Group")
stored_item_groups = frappe.get_list(
    "Item Group", fields=["item_group_name"], limit=1000
)
stored_ig_names = [ig.item_group_name for ig in stored_item_groups]
required_item_groups = ["External Parts", "Products", "Trading", "Services"]
missing_item_groups = [g for g in required_item_groups if g not in stored_ig_names]

# ------------------------------------------------------------------
# UOMs
# ------------------------------------------------------------------
uom_count = frappe.db.count("UOM")

# ------------------------------------------------------------------
# Departments (beyond the default "All Departments")
# ------------------------------------------------------------------
department_count = frappe.db.count("Department")
stored_departments = frappe.get_list(
    "Department", fields=["department_name"], limit=1000
)
stored_dep_names = [d.department_name for d in stored_departments]
required_departments = [
    "Strategy", "Innovation", "Operation", "Finance", "Support", "Production"
]
missing_departments = [d for d in required_departments if d not in stored_dep_names]

# ------------------------------------------------------------------
# Workstations
# ------------------------------------------------------------------
workstation_count = frappe.db.count("Workstation")
main_workstation_exists = frappe.db.exists(
    "Workstation", {"workstation_name": "Main Workstation"}
)

# ------------------------------------------------------------------
# Territories (sync with Country master list)
# ------------------------------------------------------------------
country_rows = frappe.get_list("Country", fields=["country_name"], limit=1000)
country_names = [c.country_name for c in country_rows]
territories = frappe.get_list("Territory", fields=["territory_name"], limit=5000)
territory_names = [t.territory_name for t in territories]
missing_territories = [
    country for country in country_names if country not in territory_names
]

# ------------------------------------------------------------------
# Customize Form (Event)
# ------------------------------------------------------------------
customize_form = frappe.db.get_value(
    "Customize Form",
    {"doc_type": "Event"},
    ["allow_auto_repeat", "track_changes", "track_views"],
    as_dict=True,
) or {}
customize_form_configured = (
    customize_form.get("allow_auto_repeat") == 1
    and customize_form.get("track_changes") == 1
    and customize_form.get("track_views") == 1
)

# ------------------------------------------------------------------
# Pillars
# ------------------------------------------------------------------
pillar_count = frappe.db.count("Pillar")
required_pillars = [
    "Overall",
    "Systems",
    "Income Statement",
    "Balance Sheet",
    "Cash Flow",
    "Net profit Management",
    "Cash Balance And Cash Budget",
    "Working Capital Plan",
    "Important Ratios",
    "Planned Production",
    "Production Capacity/Potential",
    "Production Quality Control",
    "Maintenance & Functionality",
    "Budget",
    "ROI",
    "Innovation Quantity",
    "Operationalizing Strategic Framework",
    "Managing Regulatory Framework",
    "HR Management",
    "Sales & Marketing",
    "CRM",
    "Inventory & Stores Management",
    "Customer Support",
    "Transport & Logistics",
    "HSE",
]
stored_pillars = frappe.get_list("Pillar", fields=["pillar_name"], limit=1000)
stored_pillar_names = [p.pillar_name for p in stored_pillars]
missing_pillars = [p for p in required_pillars if p not in stored_pillar_names]

# ------------------------------------------------------------------
# Asset Categories
# ------------------------------------------------------------------
asset_category_count = frappe.db.count("Asset Category")
required_asset_categories = [
    "Capital Equipment",
    "Buildings",
    "Electronics",
    "Furniture",
    "Office",
    "Machineries",
    "Software",
]
stored_asset_categories = frappe.get_list(
    "Asset Category", fields=["asset_category_name"], limit=1000
)
stored_asset_category_names = [a.asset_category_name for a in stored_asset_categories]
missing_asset_categories = [
    a for a in required_asset_categories if a not in stored_asset_category_names
]

# ------------------------------------------------------------------
# Sales Taxes and Charges Templates
# ------------------------------------------------------------------
sales_tax_template_count = frappe.db.count("Sales Taxes and Charges Template")
required_sales_tax_templates = ["Oman 5% VAT", "Export Tax Exempt"]
stored_sales_tax_templates = frappe.get_list(
    "Sales Taxes and Charges Template", fields=["title"], limit=1000
)
stored_sales_tax_template_titles = [t.title for t in stored_sales_tax_templates]
missing_sales_tax_templates = [
    t for t in required_sales_tax_templates if t not in stored_sales_tax_template_titles
]

# ------------------------------------------------------------------
# UOM updates (must_be_whole_number should be 0)
# ------------------------------------------------------------------
uoms_marked_whole = frappe.get_list(
    "UOM",
    fields=["name"],
    filters=[["must_be_whole_number", "=", 1]],
    limit=10000,
)
uom_updates_needed_count = len(uoms_marked_whole)

# ------------------------------------------------------------------
# Issues (Issue Priority + Issue Type)
# ------------------------------------------------------------------
issue_priority_count = frappe.db.count("Issue Priority")
issue_type_count = frappe.db.count("Issue Type")
required_issue_priorities = ["Low", "Medium", "High"]
required_issue_types = [
    "Bug",
    "Feature Request",
    "Invalid Data",
    "Data Loss",
    "Slow Connection",
]
stored_issue_priorities = frappe.get_list("Issue Priority", fields=["name"], limit=100)
stored_issue_types = frappe.get_list("Issue Type", fields=["name"], limit=100)
stored_issue_priority_names = [p.name for p in stored_issue_priorities]
stored_issue_type_names = [t.name for t in stored_issue_types]
missing_issue_priorities = [
    p for p in required_issue_priorities if p not in stored_issue_priority_names
]
missing_issue_types = [
    t for t in required_issue_types if t not in stored_issue_type_names
]

# ------------------------------------------------------------------
# System singleton config
# ------------------------------------------------------------------
system_settings_doc = frappe.db.get_value(
    "System",
    "System",
    ["strategy", "innovation", "operation", "finance", "production", "support"],
    as_dict=True,
) or {}
system_configured = (
    system_settings_doc.get("strategy") == 15
    and system_settings_doc.get("innovation") == 25
    and system_settings_doc.get("operation") == 30
    and system_settings_doc.get("finance") == 10
    and system_settings_doc.get("production") == 15
    and system_settings_doc.get("support") == 5
)

# ------------------------------------------------------------------
# Permissions (Si6 Roles)
# ------------------------------------------------------------------
permissions_count = frappe.db.count("Permissions")
required_permissions = [
    "guest",
    "administrator",
    "ceo",
    "garage-foreman",
    "garage-technician",
    "super-user",
]
stored_permissions = frappe.get_list("Permissions", fields=["role"], limit=1000)
stored_permission_roles = [p.role for p in stored_permissions]
missing_permissions = [
    role for role in required_permissions if role not in stored_permission_roles
]

frappe.response["message"] = {
    "global_defaults_configured": global_defaults_configured,
    "system_settings_configured": system_settings_configured,
    "fiscal_year_count": fiscal_year_count,
    "current_fiscal_year_exists": bool(current_fiscal_year_exists),
    "territory_count": territory_count,
    "mode_of_payment_count": mode_of_payment_count,
    "card_mop_exists": bool(card_mop_exists),
    "payment_term_count": payment_term_count,
    "missing_payment_terms": missing_payment_terms,
    "project_type_count": project_type_count,
    "missing_project_types": missing_project_types,
    "task_type_count": task_type_count,
    "missing_task_types": missing_task_types,
    "item_group_count": item_group_count,
    "missing_item_groups": missing_item_groups,
    "uom_count": uom_count,
    "department_count": department_count,
    "missing_departments": missing_departments,
    "missing_territories": missing_territories,
    "customize_form_configured": customize_form_configured,
    "pillar_count": pillar_count,
    "missing_pillars": missing_pillars,
    "asset_category_count": asset_category_count,
    "missing_asset_categories": missing_asset_categories,
    "sales_tax_template_count": sales_tax_template_count,
    "missing_sales_tax_templates": missing_sales_tax_templates,
    "uom_updates_needed_count": uom_updates_needed_count,
    "issue_priority_count": issue_priority_count,
    "issue_type_count": issue_type_count,
    "missing_issue_priorities": missing_issue_priorities,
    "missing_issue_types": missing_issue_types,
    "system_configured": system_configured,
    "workstation_count": workstation_count,
    "main_workstation_exists": bool(main_workstation_exists),
    "permissions_count": permissions_count,
    "missing_permissions": missing_permissions,
    "all_ready": (
        global_defaults_configured
        and system_settings_configured
        and bool(current_fiscal_year_exists)
        and not missing_payment_terms
        and not missing_project_types
        and not missing_task_types
        and not missing_item_groups
        and not missing_departments
        and not missing_territories
        and customize_form_configured
        and not missing_pillars
        and not missing_asset_categories
        and not missing_sales_tax_templates
        and uom_updates_needed_count == 0
        and not missing_issue_priorities
        and not missing_issue_types
        and system_configured
        and not missing_permissions
        and bool(main_workstation_exists)
    ),
}
    `},this.si6_create_required_documents={name:"si6_create_required_documents",script_type:"API",api_method:"si6_create_required_documents",script:`
# Frappe Server Script \u2014 API Type
# Method Name: si6_create_required_documents
# Endpoint: POST /api/method/si6_create_required_documents
#
# Creates all essential ERPNext documents that may be missing on a fresh
# ERPNext installation. Mirrors the Angular async-utilities sync() pipeline
# for the document types that can be seeded server-side.
#
# Idempotent: all operations check existence before inserting.

current_year = frappe.utils.now_datetime().year

created = []
skipped = []

# ------------------------------------------------------------------
# Helper
# ------------------------------------------------------------------
def insert_if_missing(doctype, filters, doc_data):
    if not frappe.db.exists(doctype, filters):
        doc = frappe.get_doc({"doctype": doctype, **doc_data})
        # Guard against check-then-insert races and replays.
        doc.insert(ignore_permissions=True, ignore_if_duplicate=True)
        created.append(f"{doctype}: {doc.name}")
    else:
        skipped.append(f"{doctype}: {filters}")


def upsert_sales_tax_template(title, company, taxes):
    template_name = frappe.db.get_value(
        "Sales Taxes and Charges Template", {"title": title}, "name"
    )

    def normalize(rows):
        normalized = []
        for row in rows or []:
            normalized.append(
                {
                    "charge_type": row.get("charge_type")
                    if isinstance(row, dict)
                    else row.charge_type,
                    "account_head": row.get("account_head")
                    if isinstance(row, dict)
                    else row.account_head,
                    "description": row.get("description")
                    if isinstance(row, dict)
                    else row.description,
                    "rate": frappe.utils.flt(
                        row.get("rate") if isinstance(row, dict) else row.rate
                    ),
                }
            )
        return normalized

    desired_taxes = normalize(taxes)

    if not template_name:
        doc = frappe.get_doc(
            {
                "doctype": "Sales Taxes and Charges Template",
                "title": title,
                "company": company,
                "taxes": taxes,
            }
        )
        doc.insert(ignore_permissions=True, ignore_if_duplicate=True)
        created.append(f"Sales Taxes and Charges Template: {doc.name} (created)")
        return

    doc = frappe.get_doc("Sales Taxes and Charges Template", template_name)
    existing_taxes = normalize(doc.taxes)

    if doc.company != company or existing_taxes != desired_taxes:
        doc.company = company
        doc.set("taxes", [])
        for row in taxes:
            doc.append(
                "taxes",
                {
                    "charge_type": row.get("charge_type"),
                    "account_head": row.get("account_head"),
                    "description": row.get("description"),
                    "rate": row.get("rate"),
                },
            )
        doc.save(ignore_permissions=True)
        created.append(f"Sales Taxes and Charges Template: {doc.name} (updated)")
    else:
        skipped.append(
            f"Sales Taxes and Charges Template: {{'title': '{title}'}} (unchanged)"
        )

# ------------------------------------------------------------------
# 1. Global Defaults
# ------------------------------------------------------------------
global_defaults = frappe.get_doc("Global Defaults", "Global Defaults")
global_defaults.default_currency = "OMR"
global_defaults.disable_rounded_total = 1
global_defaults.save(ignore_permissions=True)
created.append("Global Defaults: updated")

# ------------------------------------------------------------------
# 2. System Settings
# ------------------------------------------------------------------
system_settings = frappe.get_doc("System Settings", "System Settings")
system_settings.language = "en"
system_settings.time_zone = "Etc/GMT-4"
system_settings.date_format = "dd-mm-yyyy"
system_settings.time_format = "HH:mm:ss"
system_settings.number_format = "#,###.###"
system_settings.float_precision = "8"
system_settings.currency_precision = "4"
system_settings.save(ignore_permissions=True)
created.append("System Settings: updated")

# ------------------------------------------------------------------
# 3. Fiscal Years \u2014 current year \xB1 10 years
# ------------------------------------------------------------------
companies = frappe.get_list("Company", fields=["name"], limit=1)
company_name = companies[0].name if companies else None

for offset in range(-10, 11):
    year = current_year + offset
    year_str = str(year)
    if not frappe.db.exists("Fiscal Year", {"year": year_str}):
        fy = frappe.get_doc({
            "doctype": "Fiscal Year",
            "year": year_str,
            "year_start_date": f"{year}-01-01",
            "year_end_date": f"{year}-12-31",
        })
        if company_name:
            fy.append("companies", {"company": company_name})
        fy.insert(ignore_permissions=True, ignore_if_duplicate=True)
        created.append(f"Fiscal Year: {year_str}")
    else:
        skipped.append(f"Fiscal Year: {year_str}")

# ------------------------------------------------------------------
# 4. Mode of Payment \u2014 Card
# ------------------------------------------------------------------
if not frappe.db.exists("Mode of Payment", {"mode_of_payment": "Card"}):
    mop = frappe.get_doc({
        "doctype": "Mode of Payment",
        "mode_of_payment": "Card",
        "type": "Bank",
    })
    bank_accounts = frappe.get_list(
        "Account",
        filters=[["account_type", "=", "Bank"], ["is_group", "=", 0]],
        fields=["name"],
        limit=100,
    )
    for acct in bank_accounts:
        mop.append("accounts", {"default_account": acct.name})
    mop.insert(ignore_permissions=True, ignore_if_duplicate=True)
    created.append("Mode of Payment: Card")
else:
    skipped.append("Mode of Payment: Card")

# ------------------------------------------------------------------
# 5. Payment Terms
# ------------------------------------------------------------------
payment_terms_preset = [
    {
        "payment_term_name": "Advance 25% Payment",
        "invoice_portion": 25,
        "due_date_based_on": "Day(s) after invoice date",
        "discount_type": "Amount",
        "discount": 0,
        "discount_validity_based_on": "Day(s) after invoice date",
        "discount_validity": 0,
    },
    {
        "payment_term_name": "Remaining 75% Payment",
        "invoice_portion": 75,
        "credit_days": 45,
        "due_date_based_on": "Day(s) after invoice date",
        "discount_type": "Amount",
        "discount": 0,
        "discount_validity_based_on": "Day(s) after invoice date",
        "discount_validity": 0,
    },
    {
        "payment_term_name": "Full Payment",
        "invoice_portion": 100,
        "due_date_based_on": "Day(s) after invoice date",
        "discount_type": "Amount",
        "discount": 0,
        "discount_validity_based_on": "Day(s) after invoice date",
        "discount_validity": 0,
    },
]
for pt in payment_terms_preset:
    insert_if_missing(
        "Payment Term",
        {"payment_term_name": pt["payment_term_name"]},
        pt,
    )

# ------------------------------------------------------------------
# 6. Project Types
# ------------------------------------------------------------------
for project_type in ["Project", "Job", "Manufacture", "Innovation"]:
    insert_if_missing(
        "Project Type",
        {"project_type": project_type},
        {"project_type": project_type},
    )

# ------------------------------------------------------------------
# 7. Task Types
# ------------------------------------------------------------------
for task_type in [
    "Service", "Product", "POA", "Appointment", "Inspection",
    "Task", "Approval", "Meeting", "Payment", "Delivery",
]:
    insert_if_missing(
        "Task Type",
        {"task_type": task_type},
        {"name": task_type, "task_type": task_type},
    )

# ------------------------------------------------------------------
# 8. Item Groups
# ------------------------------------------------------------------
item_groups_preset = [
    {"item_group_name": "External Parts", "is_group": 0, "parent_item_group": "All Item Groups"},
    {"item_group_name": "Products", "is_group": 1, "parent_item_group": "All Item Groups"},
    {"item_group_name": "Trading", "is_group": 1, "parent_item_group": "All Item Groups"},
    {"item_group_name": "Services", "is_group": 1, "parent_item_group": "All Item Groups"},
]
for ig in item_groups_preset:
    insert_if_missing(
        "Item Group",
        {"item_group_name": ig["item_group_name"]},
        ig,
    )

# ------------------------------------------------------------------
# 9. Departments
# ------------------------------------------------------------------
departments_preset = [
    {"department_name": "Strategy", "is_group": 1},
    {"department_name": "Innovation", "is_group": 1},
    {"department_name": "Operation", "is_group": 1},
    {"department_name": "Finance", "is_group": 1},
    {"department_name": "Support", "is_group": 1},
    {"department_name": "Production", "is_group": 1},
]
for dep in departments_preset:
    dep_data = {**dep}
    if company_name:
        dep_data["company"] = company_name
    insert_if_missing(
        "Department",
        {"department_name": dep["department_name"]},
        dep_data,
    )

# ------------------------------------------------------------------
# 10. Workstation
# ------------------------------------------------------------------
insert_if_missing(
    "Workstation",
    {"workstation_name": "Main Workstation"},
    {"workstation_name": "Main Workstation", "production_capacity": 1000},
)

# ------------------------------------------------------------------
# 11. Territories (sync with Country master list)
# ------------------------------------------------------------------
countries = frappe.get_list("Country", fields=["country_name"], limit=1000)
for country in countries:
    insert_if_missing(
        "Territory",
        {"territory_name": country.country_name},
        {
            "territory_name": country.country_name,
            "parent_territory": "All Territories",
            "is_group": 0,
        },
    )

# ------------------------------------------------------------------
# 12. Customize Form (Event) - update
# ------------------------------------------------------------------
customize_form_name = frappe.db.get_value(
    "Customize Form", {"doc_type": "Event"}, "name"
)
if customize_form_name:
    customize_form = frappe.get_doc("Customize Form", customize_form_name)
else:
    customize_form = frappe.get_doc({"doctype": "Customize Form", "doc_type": "Event"})

customize_form.allow_auto_repeat = 1
customize_form.track_changes = 1
customize_form.track_views = 1

if customize_form.is_new():
    customize_form.insert(ignore_permissions=True)

customize_form.run_method("save_customization")
created.append("Customize Form(Event): updated")

# ------------------------------------------------------------------
# 13. Pillars
# ------------------------------------------------------------------
pillars_preset = [
    {"pillar_name": "Overall", "system": "Strategy", "weight": 50},
    {"pillar_name": "Systems", "system": "Strategy", "weight": 50},
    {"pillar_name": "Income Statement", "system": "Finance", "weight": 20},
    {"pillar_name": "Balance Sheet", "system": "Finance", "weight": 20},
    {"pillar_name": "Cash Flow", "system": "Finance", "weight": 10},
    {"pillar_name": "Net profit Management", "system": "Finance", "weight": 20},
    {"pillar_name": "Cash Balance And Cash Budget", "system": "Finance", "weight": 10},
    {"pillar_name": "Working Capital Plan", "system": "Finance", "weight": 10},
    {"pillar_name": "Important Ratios", "system": "Finance", "weight": 10},
    {"pillar_name": "Planned Production", "system": "Production", "weight": 25},
    {
        "pillar_name": "Production Capacity/Potential",
        "system": "Production",
        "weight": 25,
    },
    {
        "pillar_name": "Production Quality Control",
        "system": "Production",
        "weight": 25,
    },
    {
        "pillar_name": "Maintenance & Functionality",
        "system": "Production",
        "weight": 25,
    },
    {"pillar_name": "Budget", "system": "Innovation", "weight": 50},
    {"pillar_name": "ROI", "system": "Innovation", "weight": 25},
    {"pillar_name": "Innovation Quantity", "system": "Innovation", "weight": 25},
    {
        "pillar_name": "Operationalizing Strategic Framework",
        "system": "Operation",
        "weight": 50,
    },
    {
        "pillar_name": "Managing Regulatory Framework",
        "system": "Operation",
        "weight": 25,
    },
    {"pillar_name": "HR Management", "system": "Operation", "weight": 25},
    {"pillar_name": "Sales & Marketing", "system": "Support", "weight": 10},
    {"pillar_name": "CRM", "system": "Support", "weight": 10},
    {
        "pillar_name": "Inventory & Stores Management",
        "system": "Support",
        "weight": 20,
    },
    {"pillar_name": "Customer Support", "system": "Support", "weight": 20},
    {
        "pillar_name": "Transport & Logistics",
        "system": "Support",
        "weight": 20,
    },
    {"pillar_name": "HSE", "system": "Support", "weight": 20},
]
for pillar in pillars_preset:
    insert_if_missing(
        "Pillar",
        {"pillar_name": pillar["pillar_name"]},
        pillar,
    )

# ------------------------------------------------------------------
# 14. Asset Categories
# ------------------------------------------------------------------
asset_accounts = frappe.get_list("Account", fields=["name", "account_name"], limit=10000)
asset_account_map = {a.account_name: a.name for a in asset_accounts}
accumulated_depreciation_account = asset_account_map.get("Accumulated Depreciation")
depreciation_expense_account = asset_account_map.get("Depreciation")

asset_categories_preset = [
    ("Capital Equipment", "Capital Equipments"),
    ("Buildings", "Buildings"),
    ("Electronics", "Electronic Equipments"),
    ("Furniture", "Furnitures and Fixtures"),
    ("Office", "Office Equipments"),
    ("Machineries", "Plants and Machineries"),
    ("Software", "Softwares"),
]

if not company_name:
    skipped.append("Asset Category: skipped (no company found)")
elif not accumulated_depreciation_account or not depreciation_expense_account:
    skipped.append("Asset Category: skipped (missing depreciation accounts)")
else:
    for category_name, fixed_account_name in asset_categories_preset:
        fixed_asset_account = asset_account_map.get(fixed_account_name)
        if not fixed_asset_account:
            skipped.append(
                f"Asset Category: {category_name} skipped (missing account {fixed_account_name})"
            )
            continue

        insert_if_missing(
            "Asset Category",
            {"asset_category_name": category_name},
            {
                "asset_category_name": category_name,
                "accounts": [
                    {
                        "company_name": company_name,
                        "fixed_asset_account": fixed_asset_account,
                        "accumulated_depreciation_account": accumulated_depreciation_account,
                        "depreciation_expense_account": depreciation_expense_account,
                    }
                ],
            },
        )

# ------------------------------------------------------------------
# 15. Sales Taxes and Charges Template
# ------------------------------------------------------------------
tax_account_name = frappe.db.get_value(
    "Account",
    {"account_type": "Tax", "is_group": 0},
    "name",
)
tax_templates_preset = [
    {
        "title": "Oman 5% VAT",
        "taxes": [
            {
                "charge_type": "On Net Total",
                "account_head": tax_account_name,
                "description": "5% VAT",
                "rate": 5,
            }
        ],
    },
    {
        "title": "Export Tax Exempt",
        "taxes": [
            {
                "charge_type": "Actual",
                "account_head": tax_account_name,
                "description": "No Tax for Export",
                "rate": 0,
            }
        ],
    },
]

if not company_name:
    skipped.append("Sales Taxes and Charges Template: skipped (no company found)")
elif not tax_account_name:
    skipped.append("Sales Taxes and Charges Template: skipped (no tax account found)")
else:
    for template in tax_templates_preset:
        upsert_sales_tax_template(
            title=template["title"],
            company=company_name,
            taxes=template["taxes"],
        )

# ------------------------------------------------------------------
# 16. UOM - update
# ------------------------------------------------------------------
uoms_marked_whole = frappe.get_list(
    "UOM",
    fields=["name"],
    filters=[["must_be_whole_number", "=", 1]],
    limit=10000,
)
for uom in uoms_marked_whole:
    frappe.db.set_value("UOM", uom.name, "must_be_whole_number", 0)

if uoms_marked_whole:
    created.append(f"UOM: updated {len(uoms_marked_whole)} record(s)")
else:
    skipped.append("UOM: no updates needed")

# ------------------------------------------------------------------
# 17. Issues (Issue Priority + Issue Type)
# ------------------------------------------------------------------
for issue_priority in ["Low", "Medium", "High"]:
    insert_if_missing(
        "Issue Priority",
        {"name": issue_priority},
        {"name": issue_priority, "description": f"{issue_priority} Priority Issue"},
    )

for issue_type in [
    "Bug",
    "Feature Request",
    "Invalid Data",
    "Data Loss",
    "Slow Connection",
]:
    insert_if_missing(
        "Issue Type",
        {"name": issue_type},
        {"name": issue_type, "description": f"{issue_type} Issue Type"},
    )

# ------------------------------------------------------------------
# 18. System singleton - update
# ------------------------------------------------------------------
system_doc = frappe.get_doc("System", "System")
system_doc.strategy = 15
system_doc.innovation = 25
system_doc.operation = 30
system_doc.finance = 10
system_doc.production = 15
system_doc.support = 5
system_doc.save(ignore_permissions=True)
created.append("System: updated")

# ------------------------------------------------------------------
# 19. Permissions (Si6 Roles)
# ------------------------------------------------------------------
all_pages = [
    "annual-business-plan",
    "asset-categories",
    "asset-depreciations",
    "asset-investments",
    "asset-purchase",
    "asset-sale",
    "audit-report",
    "balance-sheet-report",
    "bank-reconciliation",
    "bank-reconciliation-report",
    "barcodes",
    "brand-awareness-regionwise",
    "calendar",
    "cash-entry",
    "cash-flow-report",
    "chart-of-accounts",
    "cost-centers",
    "customer-acquisition-report",
    "customer-communication",
    "customer-feedbacks",
    "customers",
    "currency-and-exchange-rates",
    "daily-sales-reports",
    "delivery-notes",
    "delivery-trips",
    "department-performance",
    "departments",
    "dividend-payment-entry",
    "drivers",
    "employee-performance",
    "employees",
    "employees-development",
    "equity",
    "events",
    "expenses",
    "finance-dashboard",
    "finance-projects",
    "finance-tasks",
    "fiscal-years-period",
    "general-ledger-report",
    "help-and-faqs",
    "holiday-lists",
    "hse-system",
    "human-capital",
    "innovation-commercialization-process",
    "innovation-dashboard",
    "innovation-development-process",
    "innovation-management-process",
    "innovation-process",
    "innovation-projects",
    "innovation-tasks",
    "ip-management-process",
    "issues",
    "jobs",
    "journal-entries",
    "key-documents",
    "knowledge-hub",
    "leave-applications",
    "leave-balance-summary-report",
    "leave-periods",
    "leave-policies",
    "leave-policy-assignments",
    "leave-types",
    "links",
    "loan-management",
    "logs",
    "maintenance",
    "maintenance-visits",
    "market-share-region-wise",
    "material-requests",
    "meetings",
    "my-account",
    "notes",
    "operation-dashboard",
    "operation-projects",
    "operation-tasks",
    "organization-structure",
    "overall-equipment-effectiveness",
    "overall-qc",
    "payroll",
    "payment-entries",
    "payment-entries-report",
    "payment-terms",
    "pos-branches",
    "pos-invoices",
    "pos-shop",
    "process-recruitment",
    "production-capacity",
    "production-dashboard",
    "production-jobs",
    "production-operations",
    "production-projects",
    "production-tasks",
    "profit-and-loss-report",
    "project-process",
    "projects",
    "purchase-analytics-report",
    "purchase-invoices",
    "purchase-orders",
    "purchase-receipts",
    "qc-items",
    "retention-plan",
    "rfqs",
    "safety-training-and-licenses",
    "sales-analytics-report",
    "sales-channels",
    "sales-invoices",
    "sales-orders",
    "sales-partners-distributors",
    "sales-persons",
    "sales-quotations",
    "sales-team-by-channels-and-territories",
    "scheduled-maintenance-and-failure",
    "segments",
    "service-level-agreement",
    "services",
    "settings",
    "shipments",
    "si6-bot",
    "staff-handbook",
    "statisitcs",
    "stock-analytics-report",
    "stock-balance-report",
    "stock-entries",
    "stock-items",
    "stock-ledger-report",
    "stock-reconciliation-report",
    "stock-reconciliations",
    "strategy-dashboard",
    "strategy-projects",
    "strategy-tasks",
    "strategic-framework",
    "strategic-innovation-canvas",
    "suppliers",
    "support-dashboard",
    "support-projects",
    "support-tasks",
    "sync",
    "tasks",
    "tasks-and-projects",
    "tax-settings",
    "translations",
    "trial-balance-report",
    "utilise-tasks-and-projects",
    "vehicles",
    "vehicle-brands",
    "warehouses",
    "warranty",
    "work-orders",
    "working-environment",
]

permissions_preset = [
    {
        "role": "guest",
        "operations": [],
        "views": ["portal"],
    },
    {
        "role": "administrator",
        "operations": [],
        "views": ["sync", "settings", "my-account"],
    },
    {
        "role": "ceo",
        "operations": ["Read", "Approve"],
        "views": [
            "organization-structure",
            "strategic-innovation-canvas",
            "strategic-framework",
            "annual-business-plan",
            "daily-sales-reports",
            "strategy-dashboard",
            "notes",
            "events",
            "logs",
            "knowledge-hub",
            "meetings",
            "key-documents",
            "portal",
            "my-account",
        ],
    },
    {
        "role": "garage-foreman",
        "operations": ["Create", "Read", "Update", "Delete", "Assign", "Operate", "Approve"],
        "views": ["tasks", "jobs", "portal", "my-account"],
    },
    {
        "role": "garage-technician",
        "operations": ["Create", "Read", "Update", "Delete", "Operate"],
        "views": ["tasks", "portal", "my-account"],
    },
    {
        "role": "super-user",
        "operations": ["Create", "Read", "Update", "Delete", "Assign", "Operate", "Approve"],
        "views": all_pages,
    },
]

for permission in permissions_preset:
    insert_if_missing(
        "Permissions",
        {"role": permission["role"]},
        {
            "role": permission["role"],
            "systems": [],
            "operations": [
                {"operation": operation}
                for operation in permission["operations"]
            ],
            "views": [{"page": page} for page in permission["views"]],
        },
    )

# ------------------------------------------------------------------
# 20. Role Permissions Manager (User / System Manager)
# ------------------------------------------------------------------
custom_docperm_filters = {
    "parent": "User",
    "permlevel": 0,
    "role": "System Manager",
}
docperm_filters = {
    "parent": "User",
    "permlevel": 0,
    "role": "System Manager",
}
permissions_updated = False

custom_docperm_name = frappe.db.get_value(
    "Custom DocPerm", custom_docperm_filters, "name"
)
if custom_docperm_name:
    current_value = frappe.db.get_value(
        "Custom DocPerm", custom_docperm_name, "set_user_permissions"
    )
    if frappe.utils.cint(current_value) != 0:
        frappe.db.set_value(
            "Custom DocPerm", custom_docperm_name, "set_user_permissions", 0
        )
        permissions_updated = True
        created.append(
            "Role Permissions(User/System Manager): set_user_permissions disabled (custom)"
        )
    else:
        skipped.append(
            "Role Permissions(User/System Manager): set_user_permissions already disabled (custom)"
        )
else:
    docperm_name = frappe.db.get_value("DocPerm", docperm_filters, "name")
    if docperm_name:
        current_value = frappe.db.get_value(
            "DocPerm", docperm_name, "set_user_permissions"
        )
        if frappe.utils.cint(current_value) != 0:
            frappe.db.set_value("DocPerm", docperm_name, "set_user_permissions", 0)
            permissions_updated = True
            created.append(
                "Role Permissions(User/System Manager): set_user_permissions disabled"
            )
        else:
            skipped.append(
                "Role Permissions(User/System Manager): set_user_permissions already disabled"
            )
    else:
        skipped.append(
            "Role Permissions(User/System Manager): skipped (permission row not found)"
        )

if permissions_updated:
    skipped.append(
        "Role Permissions(User/System Manager): cache clear skipped in Server Script sandbox"
    )

# ------------------------------------------------------------------
frappe.db.commit()

frappe.response["message"] = {
    "created": created,
    "skipped": skipped,
    "total_created": len(created),
    "total_skipped": len(skipped),
}
    `},this.scripts=[this.si6_accounting_data,this.si6_app_bootstrap,this.si6_guard_context,this.si6_portal_data,this.si6_reference_data,this.si6_fetch_required_documents,this.si6_create_required_documents],this.initialization=d({defaultValue:[],loader:async()=>{let i=[],t=await this.crudStore.list("Server Script",i,[],[],100),_=new Map(t.map(e=>[e.name,e]));for(let e of this.scripts){let s=_.get(e.name);if(!s){await this.crudStore.create("Server Script",e);continue}(s.script!==e.script||s.api_method!==e.api_method||s.script_type!==e.script_type)&&await this.crudStore.update("Server Script",s.name,{script:e.script,api_method:e.api_method,script_type:e.script_type})}return await this.crudStore.list("Server Script",i,[],[],100)}}),m(()=>{!this.initialization.isLoading()&&!this.initialization.error()&&this.router.navigateByUrl("/documents-preparation")})}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=c({type:a,selectors:[["app-initialization"]],decls:6,vars:0,consts:[[1,"relative","h-screen","flex","items-center","justify-center"],["src","assets/imgs/sic.svg","alt","Strategic Innovation Center",1,"absolute","w-1/2","opacity-20"],["lines","none","color","clear",1,"min-w-[20rem]"],[1,"font-bold","text-2xl"]],template:function(t,_){t&1&&(n(0,"div",0),p(1,"img",1),n(2,"ion-item",2)(3,"ion-label",3),l(4,"System is initializing"),o(),p(5,"ion-spinner"),o()())},dependencies:[y,f,g],encapsulation:2,changeDetection:0})}}return a})();export{C as InitializationComponent};
